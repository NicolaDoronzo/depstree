
export class BehaviorSubject {

  constructor(initialValue) {
    this._value = initialValue;
    this.callbacks = [];
  }

  subscribe(cb) {
    this.callbacks.push(cb);
    cb(this._value);
  }

  next(value) {
    this._value = value;
    this.callbacks.forEach((cb) => cb(value))
  }
}