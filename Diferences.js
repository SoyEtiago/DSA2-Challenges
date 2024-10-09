function regularFunction(x, y) {
  return x + y;
}

const arrowFunction = (x, y) => x + y;

// 1. Syntax
console.log("Regular Function Syntax: ", regularFunction.toString());
console.log("Arrow Function Syntax: ", arrowFunction.toString());

// 2. `this` Binding
const obj = {
  value: 42,
  regularMethod: function() {
      console.log("Regular Function this: ", this.value);
  },
  arrowMethod: () => {
      console.log("Arrow Function this: ", this.value);
  }
};

obj.regularMethod(); // Outputs: 42
obj.arrowMethod();   // Outputs: undefined (or global context if in a browser)

// 3. Use of `arguments`
function regularArguments() {
  console.log(arguments);
}

const arrowArguments = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

regularArguments(1, 2, 3); // Outputs: [1, 2, 3]
// arrowArguments(1, 2, 3); // Uncommenting this will throw an error

// 4. Constructor Usage
const RegularConstructor = function(name) {
  this.name = name;
};

const ArrowConstructor = (name) => {
  this.name = name; // Will throw an error as arrow functions cannot be used as constructors
};

// const instance1 = new RegularConstructor('A'); // Works
// const instance2 = new ArrowConstructor('A'); // Uncommenting this will throw an error

console.log("Regular Function Example: ", regularFunction(5, 10)); // Outputs: 15
console.log("Arrow Function Example: ", arrowFunction(5, 10)); // Outputs: 15