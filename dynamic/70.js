/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  if (n === 0 || n === 1) {
      return n;
  }
  
  // according to google, the sum of permutations for this problem is the nth term in the fibonacci sequence where term 1 = 1 and term 2 = 2

  let fib1 = 1;
  let fib2 = 2;
  
  for (let i = 3; i <= n; i++) {
      let nextFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = nextFib;
  }
  
  return fib2;
};