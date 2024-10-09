import { Stack } from "./Stack.js";

let book = {
  name: "Harry Potter and the Philosopher's Stone",
  ISBN: "978-1408855652",
  Author: "J.K. Rowling",
  Editorial: " Bloomsbury",
};

let book1 = {
  name: "To Kill a Mockingbird",
  ISBN: "978-0061120084",
  Author: "Harper Lee",
  Editorial: "Harper Perennial Modern Classics",
};

let book2 = {
  name: "1984",
  ISBN: "978-0451524935",
  Author: "George Orwell",
  Editorial: "Signet Classics",
};

let book3 = {
  name: "The Great Gatsby",
  ISBN: "978-0743273565",
  Author: "F. Scott Fitzgerald",
  Editorial: "Scribner",
};

let stackOfBooks = new Stack();
stackOfBooks.push(book);
stackOfBooks.push(book1);
stackOfBooks.push(book2);
stackOfBooks.push(book3);

console.log(stackOfBooks.print());
