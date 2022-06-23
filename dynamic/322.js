/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//confusing to learn the algorithm, but in essence, doing a bottom up approach where we calculate each minimum amount of coins until the target amount. If the target is 6, calculate 1, 2, 3, 4, 5 and 6. if the coin calues are 1, 3, 5, our calculated minimums are 1, 2, 1, 2, 1, 2. the way we calculate this is starting from the lowest value i.e. 1, and from then on, the next value is the minimum of the previous value plus however many coins to make up the difference, then check if this value is less than the current value of the element, as the current value is computed for each coin denomination. The element is set to the lesser value of the two in the comparison.
var coinChange = function(coins, amount) {
  let max = amount + 1; //initial values so coins[j] <= i Math.min comparison always results in the second value on the first loop, maximum amount of coins used can only be equal to the amount sent in, so adding 1 makes it impossible to exceed the max on first loop
  let dp = Array(amount + 1).fill(max); //populate array with this max value and as many spaces as whole numbers from 0 to amount
  
  dp[0] = 0; //a value of 0 is always made by 0 coins so no need to put this part in loop
  
  for (let i = 1; i <= amount; i++) { //loop thru each whole value
      for (let j = 0; j < coins.length; j++) { //loop thru each coin denom for each whole value
          if (i - coins[j] >= 0) { //if the current index - the current coin has a value >= 0 i.e. the coin can be used to sum to the current target in some manner, then...
              dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1); //...check if the minimum at current target minus the coin's value plus 1 is less than the current minimum of the current target. This works because the current minimum is compared to adding the coin to the remainder of the current target value minus the coins value. In the case of coins [1, 2, 4] and target 5, the previous minimums are 1, 1, 2, 1. On first loop, check if 5 - 1 >= 0, it is. 5-1 is 4, so check the minimum value at dp[4] and add 1, and then compare that to the current minimum for this target, if 3 coins (2 coins to reach 4 plus 1 coin to reach 5) is less than the current minimum, swap the current minimum to this value, otherwise it remains the same.
          }
      }
  }
  return dp[amount] > amount ? -1 : dp[amount]; //index mirrors target, so return element at amount IFF the minimum amount of coins is not greater than the target, this means that the minimum was changed at some point, because if it's never changed, that means that it was not able to be computed, so the value of dp[amount] will be amount + 1 which is always greater than amount
};