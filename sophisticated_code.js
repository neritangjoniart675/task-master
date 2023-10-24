/* sophisticated_code.js */

// This code is a complex data processing algorithm that utilizes various concepts and techniques
// to demonstrate the power and versatility of JavaScript programming language.

// Utility functions for mathematical operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Complex data structure for storing employee information
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  promote() {
    this.salary *= 1.1; // Give a 10% salary raise
  }
}

// Random employee dataset generation function
const generateEmployees = (count) => {
  const employees = [];

  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const name = `Employee ${id}`;
    const department = `Department ${(i % 4) + 1}`;
    const salary = Math.floor(Math.random() * 50000) + 50000; // Random salary between 50,000 and 100,000

    employees.push(new Employee(id, name, department, salary));
  }

  return employees;
};

// Perform complex data processing on employee dataset
const processEmployeeData = () => {
  const employees = generateEmployees(100);

  // Filter employees based on department
  const filteredEmployees = employees.filter((employee) => employee.department === 'Department 3');

  // Calculate total salary for the filtered employees
  const totalSalary = filteredEmployees.reduce((total, employee) => total + employee.salary, 0);

  // Perform additional calculations
  const averageSalary = totalSalary / filteredEmployees.length;
  const highestPaidEmployee = filteredEmployees.reduce(
    (highestPaid, employee) => (employee.salary > highestPaid.salary ? employee : highestPaid),
    filteredEmployees[0]
  );

  // Output the results
  console.log('Filtered Employees:', filteredEmployees);
  console.log('Total Salary:', totalSalary);
  console.log('Average Salary:', averageSalary);
  console.log('Highest Paid Employee:', highestPaidEmployee);
};

// Execute the complex data processing algorithm
processEmployeeData();