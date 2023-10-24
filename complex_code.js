/* complex_code.js */

// This code performs various complex calculations and manipulations

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to find the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Object representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to add two complex numbers
  add(other) {
    return new ComplexNumber(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  // Method to multiply two complex numbers
  multiply(other) {
    return new ComplexNumber(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real
    );
  }
}

// Function to compute the determinant of a 2x2 matrix
function determinant(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Function to convert a number to binary
function decimalToBinary(num) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// Testing the code

console.log(factorial(5)); // Output: 120

console.log(fibonacci(7)); // Output: 13

const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(-1, 4);
const complexSum = complex1.add(complex2);
const complexProduct = complex1.multiply(complex2);
console.log(complexSum); // Output: ComplexNumber { real: 1, imaginary: 7 }
console.log(complexProduct); // Output: ComplexNumber { real: -14, imaginary: 5 }

const matrix = [
  [2, 3],
  [4, 5]
];
console.log(determinant(matrix)); // Output: -2

console.log(decimalToBinary(10)); // Output: 1010

console.log(isPrime(17)); // Output: true

console.log(getRandomNumber(1, 10)); // Output: random number between 1 and 10

const array = [1, 2, 3, 4, 5];
console.log(shuffleArray(array)); // Output: shuffled array