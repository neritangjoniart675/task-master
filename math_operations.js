/* math_operations.js */

// This code demonstrates various math operations and calculations
// It includes advanced algorithms and complex mathematical formulas

// Constants
const PI = 3.14159265359;
const E = 2.71828182845;

// Function to calculate the factorial of a number
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  
  return num * factorial(num - 1);
}

// Function to calculate the nth term of the Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  
  return curr;
}

// Function to find the greatest common divisor (GCD) of two numbers using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

// Function to perform matrix multiplication
function multiplyMatrix(matrix1, matrix2) {
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const cols2 = matrix2[0].length;
  
  const result = new Array(rows1);
  
  for (let i = 0; i < rows1; i++) {
    result[i] = new Array(cols2);
    
    for (let j = 0; j < cols2; j++) {
      result[i][j] = 0;
      
      for (let k = 0; k < cols1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  
  return result;
}

// Function to calculate the square root using Newton's method
function sqrtNewtonMethod(num) {
  let x = num;
  
  while (true) {
    let sqrtX = 0.5 * (x + num / x);
    
    if (Math.abs(sqrtX - x) < 0.0001) {
      break;
    }
    
    x = sqrtX;
  }
  
  return x;
}

// Calculate the area of a circle
function calculateCircleArea(radius) {
  return PI * radius * radius;
}

// Calculate the volume of a sphere
function calculateSphereVolume(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
}

// Function to convert decimal to binary
function decimalToBinary(decimal) {
  let binary = "";
  
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  
  for (let i = 0; i < binary.length; i++) {
    let bit = parseInt(binary[i]);
    decimal += bit * Math.pow(2, binary.length - 1 - i);
  }
  
  return decimal;
}

// Main program

console.log("Factorial of 5:", factorial(5));
console.log("8th Fibonacci number:", fibonacci(8));
console.log("GCD of 36 and 48:", gcd(36, 48));

const matrixA = [[1, 2], [3, 4]];
const matrixB = [[5, 6], [7, 8]];
console.log("Matrix multiplication:", multiplyMatrix(matrixA, matrixB));

console.log("Square root of 16:", sqrtNewtonMethod(16));

console.log("Area of a circle with radius 5:", calculateCircleArea(5));
console.log("Volume of a sphere with radius 3:", calculateSphereVolume(3));

const decimalNum = 15;
const binaryNum = "1101";
console.log(decimalNum, "in binary:", decimalToBinary(decimalNum));
console.log(binaryNum, "in decimal:", binaryToDecimal(binaryNum));
