/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
  // create total trackers for current and maximum subarrays, anytime total is below 0 (i.e. a negative number), the current subarray is set to 0 as it does not qualify, anytime current subarray exceeds maximum, set maximum to current
  
  let currentSubarray = nums[0]; //this is a total, not literally an array, so is the maximum sub array in the next line
  let maxSubarray = nums[0]; // doesn't matter if the max starts at negative as we can still track a negative maximum, but it will also still be thrown away 
  
  for (let i = 1; i < nums.length; i++) {
      
      currentSubarray = Math.max(nums[i], currentSubarray + nums[i]); //if the current sum added to the current number ends up being less than the current number on it's own, we can discard the current sub array and set it to the current number
      
      maxSubarray = Math.max(maxSubarray, currentSubarray); // if current sub array is more than the current max, max is set to the current
  }
  
  return maxSubarray;
};