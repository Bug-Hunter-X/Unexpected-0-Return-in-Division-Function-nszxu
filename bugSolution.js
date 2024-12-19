function myFunc(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // Throw an error for division by zero
  } else if (a === 0 || b === 0) {
    return NaN; // Return NaN to indicate undefined result
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Output: Error: Division by zero
console.log(myFunc(0, 10)); // Output: 0
console.log(myFunc(10, 2));  // Output: 5