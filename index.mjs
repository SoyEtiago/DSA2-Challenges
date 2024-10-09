import Queue from './Queue.mjs';
import Person from './Person.mjs';

const p1 = new Person("Etienne", 7);
const p2 = new Person("Camila", 8);
const p3 = new Person("Esteban", 9);

const peopleQueue = new Queue();

console.log(`Está vacio? ${peopleQueue.isEmpty()}`);

peopleQueue.enqueue(p1);
peopleQueue.enqueue(p2);
peopleQueue.enqueue(p3);

console.log("Size:", peopleQueue.size());
console.log("Shift:", peopleQueue.unqueue());
console.log("New size:", peopleQueue.size());

peopleQueue.print();