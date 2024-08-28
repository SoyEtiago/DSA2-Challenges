import {LinkedList} from "./LinkedList.mjs";

let task = {
  title: "Tarea1",
  descripcion: "Esta es la tarea uno."
}

let toDoLinkedList = new LinkedList();

toDoLinkedList.append("nodo1");
toDoLinkedList.append("nodo2");
toDoLinkedList.append("nodo3");
toDoLinkedList.print();
console.log(toDoLinkedList.peek("Nodo2"));
console.log(toDoLinkedList.size());
console.log(toDoLinkedList.remove("nodo2"));
toDoLinkedList.print();