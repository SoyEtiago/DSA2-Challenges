class Person {
  constructor(name, arrivalTime) {
    this.name = name;
    this.arrivalTime = arrivalTime;
  }

  toString() {
    return `Name: ${this.name}\nArrival Time: ${this.arrivalTime}\n`;
  }
}

export default Person;