import {LinkedList} from "./LinkedList.mjs";

let task = {
  title: "Tarea1",
  descripcion: "Esta es la tarea uno."
}

let task2 = {
  title: "Tarea2",
  descripcion: "Esta es la tarea dos."
}

let toDoLinkedList = new LinkedList();

toDoLinkedList.append(task);
toDoLinkedList.append(task2);
toDoLinkedList.print();
console.log(toDoLinkedList.peek(task2));
console.log(toDoLinkedList.size());
console.log(toDoLinkedList.remove(task2));
toDoLinkedList.print();