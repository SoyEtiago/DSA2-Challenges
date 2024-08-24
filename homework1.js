// Array methods

// Array.at()
/*The at() method of Array instances takes an integer value and returns 
* the item at that index, allowing for positive and negative integers.
* Negative integers count back from the last item in the array. NEW INTEGRATION!!!
*/

let fruits = ["Apple", "Orange", "Plum"];

let index = 1;
console.log(`An index of ${index} returns ${array1.at(index)}`);

index = -1;
console.log(`An index of ${index} returns ${array1.at(index)}`);

// Array.pop()
/* The pop() method removes the last element from an array and returns 
* that element. This method changes the length of the array.
*/

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

console.log(plants);

plants.pop();

console.log(plants);

//Array.push()
/* The push() method of Array instances adds the specified elements 
to the end of an array and returns the new length of the array.*/
// Consideration: The call of Array.push(...) equals to Array[Array.length] = ... .

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);

console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

// Array.splice()

let arr = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];

// remueve los primeros 3 elementos y los reemplaza con otros
arr.splice(0, 3, "a", "bailar");

console.log(arr);

// remueve los 2 primeros elementos
let removed = arr.splice(0, 2);

console.log(removed);