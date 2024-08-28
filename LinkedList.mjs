import {Node} from "./Node.mjs";

export class LinkedList {
  constructor() {
    this.head = null;
    this.head = null;
  }

  append(node){
    const newNode = new Node(node);

    if(!this.head) this.head = newNode;
    else this.tail.next = newNode;

    //Actualizo el valor del tail de la LinkedList
    this.tail = newNode;
  }

  peek(value, current = this.head) {
    if(this.head === null) return false;

    if(current !== null) {
      if(current.value === value) {
        return true;
      } else {
        return this.peek(value, current.next);
      }
    }

    return false;
  }

  size(current = this.head, acum = 1) {
    if(this.head === null) return 0;

    if(current.next !== null) {
      return this.size(current.next, acum = acum + 1);
    }

    return acum;
  }

  remove(value, current = this.head) {
    if(this.head === null) return false;

    if(this.head.value === value) {
      return this.head = this.head.next;
    }

    if(current.next !== null) {
      if(current.next.value === value) {
        current.next = current.next.next;
        return true;
      } else {
        return this.remove(value, current.next);
      }
    }
  }

  print() {
    let node = this.head;
    while(node !== null) {
      console.log( `Valor ${node.value} | Next: ${node.next?.value || null}` );
      node = node.next;
    }
  }
}