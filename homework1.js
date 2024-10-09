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

// Array.shift()
// Removes the first element from an array and returns that element.
let firstFruit = fruits.shift();
console.log(fruits);

// Array.unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('mango');
console.log(fruits);

// Array.concat()
// Merges two or more arrays and returns a new array.
let vegetables = ['carrot', 'potato'];
let food = fruits.concat(vegetables);
console.log(food);

// Array.splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
fruits.splice(1, 1, 'kiwi');
console.log(fruits);

// Array.indexOf()
// Returns the first index at which a given element can be found, or -1 if it is not present.
let index1 = fruits.indexOf('kiwi');
console.log(index1);

// Array.includes()
// Determines whether an array includes a certain value among its entries.
let hasMango = fruits.includes('mango');
console.log(hasMango);

// Array.forEach()
// Executes a provided function once for each array element.
fruits.forEach((fruit) => console.log(fruit));

// Array.map()
// Creates a new array with the results of calling a provided function on every element in the calling array.
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// Array.filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let longFruits = fruits.filter((fruit) => fruit.length > 4);
console.log(longFruits);

// Array.reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);

// Array.reduceRight()
// Same as reduce(), but iterates from right to left.
let reverseConcat = fruits.reduceRight((acc, fruit) => acc + fruit, '');
console.log(reverseConcat);

// Array.find()
// Returns the value of the first element in the array that satisfies the provided testing function.
let foundFruit = fruits.find((fruit) => fruit.startsWith('k'));
console.log(foundFruit);

// Array.findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith('k'));
console.log(foundIndex);

// Array.sort()
// Sorts the elements of an array in place and returns the sorted array.
fruits.sort();
console.log(fruits);

// Array.reverse()
// Reverses the elements of an array in place.
fruits.reverse();
console.log(fruits);

// Array.join()
// Joins all elements of an array into a string.
let fruitString = fruits.join(', ');
console.log(fruitString);

// Array.entries()
// Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}

// Array.keys()
// Returns a new Array Iterator object that contains the keys for each index in the array.
for (const index of fruits.keys()) {
    console.log(index);
}

// Array.values()
// Returns a new Array Iterator object that contains the values for each index in the array.
for (const fruit of fruits.values()) {
    console.log(fruit);
}

// Array.fill()
// Fills all the elements of an array from a start index to an end index with a static value.
let filledArray = new Array(5).fill('apple');
console.log(filledArray);

// Array.copyWithin()
// Shallow copies part of an array to another location in the same array and returns it without modifying its size.
let copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log(copyWithinArray);