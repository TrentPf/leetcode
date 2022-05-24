/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    
  if (n === 0) {
      return(0);
  }
  
  let fib1 = 0;
  let fib2 = 1;
  let prevFib; // track what value is supposed to be added to the larger fibonacci number so can increment the smaller one
  
  for (let i = 1; i < n; i++) {
      prevFib = fib1;
      fib1 = fib2;
      fib2 += prevFib;
  }
  
  return(fib2);
};