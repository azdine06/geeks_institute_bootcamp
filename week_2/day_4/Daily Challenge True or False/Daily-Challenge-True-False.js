function allTruthy(...args) {
  return args.every(Boolean);
}
allTruthy(true, true, true)   // → true 
allTruthy(true, false, true)  // → false
allTruthy(5, 4, 3, 2, 1, 0)  // → false (0 est falsy)

const allTruthy = (...args) => args.reduce((acc, val) => acc && Boolean(val), true);