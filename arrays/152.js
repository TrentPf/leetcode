/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  //like problem 53, tracking the max sub array, but also tracking the min sub array instead of current sub array. min sub array is used to track the largest negative number in case another negative appears later that reverts the negative into a massive positive
  
  let maxSubarray = nums[0];
  let minSubarray = nums[0];
  let result = maxSubarray;
  
  for (let i = 1; i < nums.length; i++) {
      let currentNum = nums[i];
      
      let tempMax = Math.max(currentNum, Math.max(maxSubarray*currentNum, minSubarray*currentNum)); //check currentnum with the max of min*currentnum and max*currentnum because currentnum could be negative, swapping a max to a min and a min to a max, temp used as to not modify maxSubarray for following line...
      minSubarray = Math.min(currentNum, Math.min(maxSubarray*currentNum, minSubarray*currentNum)); //same as above but for a minimum
      
      maxSubarray = tempMax; //original max no longer needed, so can swap it to the one we calculated on line 15
      
      result = Math.max(maxSubarray, result); //check the maximum with the current maximum (result) if it's larger, result set to maxSubarray
  }
  
  return result;
};