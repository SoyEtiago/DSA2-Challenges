import { Stack } from "./Stack.js";

let book = {
  name: "Harry Potter and the Philosopher's Stone",
  ISBN: "978-1408855652",
  Author: "J.K. Rowling",
  Editorial: " Bloomsbury",
};

let stackOfBooks = new Stack();
stackOfBooks.push(book);

stackOfBooks.print();
