import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";

export class LoadingBarUI extends CSS2DObject {
  constructor() {
    const container = document.createElement("div");
    const loadingBar = document.createElement("div");
    const progress = document.createElement("div");
    const progressText = document.createElement("p");
    const introText = document.createElement("h1");
    introText.textContent = "Please load a package.json file";
    const loader = document.createElement("input");
    loader.setAttribute("type", "file");
    container.appendChild(loadingBar);
    container.appendChild(progressText);
    loadingBar.appendChild(progress);

    loadingBar.style.height = "2em";
    loadingBar.style.width = "20em";
    loadingBar.style.backgroundColor = "black";
    loadingBar.style.padding = ".5em";
    progress.style.height = "100%";
    progress.style.width = "0%";
    progress.style.backgroundColor = "white";
    progressText.style.fontSize = "2rem";

    super(container);

    this.updateProgress = (progress) => {
      progress.style.width = `${progress}%`;
    };
  }
}

export class EmptyPackageMenuUI extends CSS2DObject {
  constructor() {
    const container = document.createElement("div");
    const loader = document.createElement("input");
    loader.setAttribute("type", "file");
    loader.setAttribute("id", "package-loader");
    loader.style.display = "none";
    const introText = document.createElement("label");
    introText.textContent = "Please load a package.json file";
    introText.setAttribute("for", "package-loader");
    introText.style.cursor = "pointer";
    introText.style.fontSize = "4rem";

    container.appendChild(loader);
    container.appendChild(introText);

    super(container);
    this.cb = () => {};
    const onChange = (resolve) => () => {
      loader.files[0]
        .text()
        .then((pkg) => JSON.parse(JSON.stringify(pkg)))
        .then((json) => resolve(json));
    };

    this.whenLoaded = () => {
      return new Promise((resolve) => {
        loader.addEventListener("change", onChange(resolve));
      });
    };
  }

  onLoad(cb) {
    this.cb = cb;
  }
}

export class DependencyTreeChoiceUI extends CSS2DObject {
  constructor() {
    const container = document.createElement("div");
    const depsButton = document.createElement("button");
    depsButton.textContent = "Dependencies";
    const devDepsButton = document.createElement("button");
    devDepsButton.textContent = "DevDependencies";

    container.appendChild(depsButton);
    container.appendChild(devDepsButton);

    super(container);

    this.whenChosed = () => {
      return new Promise((resolve) => {
        depsButton.addEventListener("click", () => resolve("DEPS"));
        devDepsButton.addEventListener("click", () => resolve("DEV_DEPS"));
      });
    };
  }

}
