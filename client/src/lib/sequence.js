class TaskContext {
  initResult = null;
  actionResult = null;
  elapsed = 0;

  constructor({ previousTask }) {
    this.previousTask = previousTask;
  }

  handlePromise = (promise, resultName) => {
    promise.then((result) => (this[resultName || "asyncResult"] = result));
  }
}

class Task {
  done = false;
  result = null;
  firstCall = true;
  result = null;

  constructor({ step, previousTask }) {
    this._scene = step;
    this.context = new TaskContext({ previousTask });
  }

  update(elapsed) {
    this.context.elapsed = elapsed;
    if (this.firstCall) {
      this.context.initResult = this._scene.init(this.context);
      this.firstCall = false;
    } else {
      this.context.actionResult = this._scene.action(this.context);

      this.done = this._scene.endWhen(this.context);
      if (this.done) {
        this.result = this._scene.withResult(this.context);
      }
    }
  }
}

export class Step {
  constructor({
    init = (context) => null,
    action = (context) => null,
    endWhen = (context) => true,
    withResult = (context) => null,
  }) {
    this.init = init;
    this.action = action;
    this.endWhen = endWhen;
    this.withResult = withResult;
  }
}

export class Sequence {
  constructor(steps = []) {
    if (!steps.length)
      throw new Error("At least one step is needed in a sequence");

    let currentTaskIndex = 0;
    const tasks = steps.reduce((acc, step, i) => {
      const previousTask = acc[i - 1];
      return acc.concat(
        new Task({
          step,
          previousTask,
        })
      );
    }, []);
    this.run = (elapsed) => {
      const currentTask = tasks[currentTaskIndex];
      if (!currentTask) return { done: true };
      currentTask.update(elapsed);
      if (currentTask.done) {
        currentTaskIndex++;
      }
      return { done: false };
    };
  }
}
