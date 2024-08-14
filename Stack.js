export class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.at(-1);
  }

  size() {
    return this.stack.length;
  }

  print() {
    return this.stack;
  }
}
