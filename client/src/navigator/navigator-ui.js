import { TreeEntity } from "../tree/entity";

export class NavigatorUI {
  elementCounter = -1;

  /**
   *
   * @param {TreeEntity} treeEntity
   */
  constructor(treeEntity) {
    const container = document.createElement("div");
    container.classList.add("navigator");
    this.treeEntity = treeEntity;
    this.root = this._createNestedList(treeEntity.originalDependencyTree);
    treeEntity.selectedBranchId$.subscribe((branchIndex) => {
      const el = this._getElementByIndex(branchIndex);
      if (el) {
        this._select(el.id);
      }
    });

    container.appendChild(this.root);

    document.body.appendChild(container);
  }

  _createNestedList = (deps, parentUl = document.createElement("ul")) => {
    this.elementCounter++;
    if (deps.dependencies?.length) {
      const ul = this._createUl(deps.name, parentUl);
      parentUl.appendChild(ul);
      deps.dependencies.forEach((dep) => this._createNestedList(dep, ul));
    } else {
      const li = this._createLi(deps.name, parentUl);
      parentUl.appendChild(li);
    }
    return parentUl.children[0];
  };

  _createLi(name, parentList) {
    const li = document.createElement("li");
    li.id = this._getId();
    li.setAttribute("data-index", this.elementCounter);
    li.style.listStyle = "none";
    li.style.marginLeft = this._getIndentationMargin(parentList);
    li.textContent = name;
    li.onclick = (ev) => {
      ev.stopPropagation();
      this.treeEntity.selectedBranchId$.next(li.id.replace('element-', ''));
      // this._select(li.id);
    };
    return li;
  }

  _createUl(name, parentList) {
    const ul = document.createElement("ul");
    ul.id = this._getId();
    ul.setAttribute("data-index", this.elementCounter);
    ul.style.listStyle = "none";
    ul.style.marginLeft = this._getIndentationMargin(parentList);
    ul.style.position = "relative";
    const text = document.createTextNode(name);
    ul.classList.add("closed");
    ul.appendChild(text);
    ul.onclick = (ev) => {
      ev.stopPropagation();
      ul.classList.toggle("closed");
      this.treeEntity.selectedBranchId$.next(ul.id.replace('element-', ''));
    };
    return ul;
  }

  _getId() {
    return `element-${this.elementCounter}`;
  }

  _getIndentationMargin(parentList) {
    return +parentList.style.paddingLeft.replace("px", "") + 2 + "px";
  }

  _traverse = (el, cb) => {
    cb(el);
    Array.from(el.children).forEach((child) => this._traverse(child, cb));
  };

  _select(id) {
    this._traverse(this.root, (el) =>
      el.id === id
        ? el.classList.add("selected")
        : el.classList.remove("selected")
    );
  }

  _getElementByIndex(index) {
    return this.root.querySelector(`#element-${index}`);
  }
}
