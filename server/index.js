const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const DependencyFactory = function () {
  const depsCache = {};
  const branchDependencyStack = [];
  let maxDepth = 0;
  let branchCounter = 0;
  return class D {
    constructor(name, allDependencies) {
      branchCounter++;
      branchDependencyStack.push(name);
      this.name = name;

      const getSubdeps = (depName) =>
        Object.keys(allDependencies[depName]?.requires || {});

      if (depsCache[name]) {
        this.dependencies = depsCache[name];
      } else {
        const cd = getSubdeps(name).find((d) =>
          branchDependencyStack.includes(d)
        );
        this.dependencies = getSubdeps(name)
          .filter((name) => name !== cd)
          .map((n) => new D(n, allDependencies, this));
        depsCache[name] = this.dependencies;
        this.level = branchDependencyStack.length;
        maxDepth = Math.max(maxDepth, this.level);
      }
      branchDependencyStack.pop();
    }

    static getMaxDepth() {
      return maxDepth;
    }

    static getTotalBranchAmount() {
      return branchCounter;
    }
  };
};

const exec = require("util").promisify(require("child_process").exec);

app.use(cors());

app.get("/test", (req, res) => {
  console.log("GOT REQUEST");
  res.send("OK!");
});
app.post("/file", express.json(), async (req, res) => {
  console.log("REQUEST BODY --->", req.body);

  const packageFile = req.body;
  if (fs.existsSync("./tmp/package-lock.json")) {
    console.log("lock already exists. Removing existing..");
    fs.rmSync("./tmp/package-lock.json");
  }
  console.log("Saving package.json in tmp folder");

  fs.writeFileSync("./tmp/package.json", JSON.stringify(packageFile));

  console.log("Resolving dependencies...");

  try {
    await exec("npm i --force --package-lock-only", {
      cwd: "./tmp",
    });
  } catch (e) {
    // res.sendStatus(403);
    console.error(
      "SOME ERROR OR WARNING OCCURRED WHILE INSTALLING DEPENDENCIES",
      e
    );
    // return;
  }

  console.log("Reading generated lock file...");

  const lockFile = JSON.parse(
    fs.readFileSync("./tmp/package-lock.json", {
      encoding: "utf8",
    })
  );

  const Dependency = DependencyFactory();
  const dependencyTree = Object.keys(packageFile.dependencies || {}).map(
    (name) => new Dependency(name, lockFile.dependencies)
  );

  const DevDependency = DependencyFactory();
  const devDependencyTree = Object.keys(packageFile.devDependencies || {}).map(
    (name) => new DevDependency(name, lockFile.dependencies)
  );

  const body = {
    dependencies: {
      name: lockFile.name,
      dependencies: dependencyTree,
      maxDepth: Dependency.getMaxDepth(),
      branchTotalAmount: Dependency.getTotalBranchAmount(),
    },
    devDependencies: {
      name: lockFile.name,
      dependencies: devDependencyTree,
      maxDepth: DevDependency.getMaxDepth(),
      branchTotalAmount: DevDependency.getTotalBranchAmount(),
    },
  };
  console.log("Response body ->", body);

  res.json(body);
});

app.listen(8081, () => console.log("Listening"));
