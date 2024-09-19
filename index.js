/* 
   Kazi Shahed Ahmed 
   Mern Batch-7
   Module-10: Live Exam
*/


// task-1: Function to reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
}


// task-2: Function to sum an array of numbers

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


// task-3: Function to remove duplicates from an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


// task-4: Function to convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


// Example of the given tasks

console.log(reverseString("hello")); // task-1: Output: "olleh"
console.log(sumArray([1, 2, 3, 4])); // task-2: Output: 10
console.log(removeDuplicates([5, 5, 5, 6, 7])); // task-3: Output: [5, 6, 7]
console.log(celsiusToFahrenheit(25)); // task-4: Output: 77
