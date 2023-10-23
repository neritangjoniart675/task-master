/* 
Filename: ComplexCalculation.js 
Content: Performs a complex calculation involving matrices and conditional statements
*/

// Define input matrices
const matrix1 = [
  [2, 4, 6],
  [1, 3, 5],
  [7, 9, 11]
];

const matrix2 = [
  [8, 6, 4],
  [5, 3, 1],
  [11, 9, 7]
];

// Perform matrix multiplication
const multiplyMatrices = (matrixA, matrixB) => {
  const result = [];
  
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[i].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }
  
  return result;
};

const multipliedMatrix = multiplyMatrices(matrix1, matrix2);

// Calculate the sum of all elements in the multiplied matrix
let sum = 0;
let largestElement = Number.NEGATIVE_INFINITY;

for (let i = 0; i < multipliedMatrix.length; i++) {
  for (let j = 0; j < multipliedMatrix[i].length; j++) {
    sum += multipliedMatrix[i][j];
    
    if (multipliedMatrix[i][j] > largestElement) {
      largestElement = multipliedMatrix[i][j];
    }
  }
}

// Determine the result based on the sum and largest element
let result;

if (sum > 100 && largestElement < 50) {
  result = "High Sum, Low Largest Element";
} else if (sum <= 100 && largestElement >= 50) {
  result = "Low Sum, High Largest Element";
} else {
  result = "Neither";
}

console.log("Multiplied Matrix: ", multipliedMatrix);
console.log("Sum: ", sum);
console.log("Largest Element: ", largestElement);
console.log("Result: ", result);

// ... continue with more complex calculations or logic if needed ...