class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    return this.queue.push(element);
  }

  unqueue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    for (let element of this.queue) {
      console.log(element.toString());
    }
  }
}

export default Queue;