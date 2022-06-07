const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

class Dependency {
  constructor(name, allDependencies) {
    this.name = name;
    const resolvedDependency = allDependencies[name];
    const subdeps = !!resolvedDependency?.requires
      ? Object.keys(resolvedDependency.requires)
      : []; 
    this.dependencies = subdeps.map((t) => new Dependency(t, allDependencies));
  }
}

const exec = require("util").promisify(require("child_process").exec);

app.use(cors());

app.get("/test", (req, res) => {
  console.log("GOT REQUEST");
  res.send("OK!");
});

app.post("/file", express.json(), async (req, res) => {
  const packageFile = req.body;
  if (fs.existsSync("./tmp/package-lock.json")) {
    console.log("lock already exists. Removing existing..");
    fs.rmSync("./tmp/package-lock.json");
  }
  console.log("Saving package.json in tmp folder");
  fs.writeFileSync("./tmp/package.json", JSON.stringify(packageFile));

  console.log("Resolving dependencies...");
  await exec("npm i --package-lock-only", {
    cwd: "./tmp",
  });

  console.log("Reading generated lock file...");

  const lockFile = JSON.parse(
    fs.readFileSync("./tmp/package-lock.json", {
      encoding: "utf8",
    })
  );
  const dependencyTree = Object.keys(packageFile.dependencies || {}).map(
    (name) => new Dependency(name, lockFile.dependencies)
  );

  const devDependecyTree = Object.keys(packageFile.devDependencies || {}).map(
    (name) => new Dependency(name, lockFile.dependencies)
  );
  
  const body = { dependencyTree, devDependecyTree }; 
  res.json();
});

app.listen(8080, () => console.log("Listening"));
