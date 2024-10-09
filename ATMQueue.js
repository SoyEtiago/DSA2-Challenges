import { Queue } from "./Queue.js";

let person1 = {
  name: "Etienne",
  arrival_time: new Date()
};

let person2 = {
  name: "Santiago",
  arrival_time: new Date()
};

let person3 = {
  name: "Maria",
  arrival_time: new Date()
};

let ATMQueue = new Queue();

ATMQueue.enqueue(person1);
ATMQueue.enqueue(person2);
ATMQueue.enqueue(person3);

console.log(ATMQueue.print());