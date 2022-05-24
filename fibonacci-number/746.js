/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    
  let n = cost.length;
  
  let pathArray = new Array(n);
  
  if (n === 1) {
      return cost[0];
  }
  
  pathArray[0] = cost[0];
  pathArray[1] = cost[1];
  
  for (let i = 2; i < n; i++) {
      pathArray[i] = Math.min(pathArray[i-1], pathArray[i-2]) + cost[i];
  }
  
  return Math.min(pathArray[n-1], pathArray[n-2]);

};