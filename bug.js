function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line might cause unexpected behavior
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Output: 0
console.log(myFunc(0, 10)); // Output: 0
console.log(myFunc(10, 2));  // Output: 5