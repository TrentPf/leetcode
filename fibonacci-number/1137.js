/**
 * @param {number} n
 * @return {number}
 */

 var tribonacci = function(n) {
   
  if (n === 0) {
      return 0;
  }
  
  if (n === 1 || n === 2) {
      return 1;
  }
  
  tribArray = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
      tribArray.push(tribArray[i-1] + tribArray[i-2] + tribArray[i-3]);
  }
  
  return tribArray[n];
};