/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER; //arbitrary value at the integer safe maximum so there's something to check against potential minimums at the start
  let maxProfit = 0; //profit should always be positive so can set initial value to 0
  
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) { // check for new min, replace minPrice with this new value
          minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit){ //if current check isn't a new min, check to see if the difference between it and the current min is greater than the current max profit value, set max profit to this difference
          maxProfit = prices[i] - minPrice;
      }
  }
  return maxProfit;
};