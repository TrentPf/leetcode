/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    
  // check values to left of current value, and later check values to the right. Once these values are obtained we can simply multiply them together during the right side pass-thru for the correct value at the index. This is done by multiplying the previous value by the current one and setting the value at the index equal to that, this means all values at index in the answer are never based on the values of the current index in the input array i.e. finding the product of all other values.
  
  let length = nums.length;
  
  let answer = new Array(length).fill(0);
  
  answer[0] = 1; // no values on left end to compare with so first value in answer array set to 1 because any value multiplied by 1 is not modified in numeric value
  
  for (let i = 1; i < length; i++) {
      answer[i] = nums[i-1] * answer[i-1];
  }
  
  let endValue = 1  // same as above comment, no values to compare on the right end so 1 is used for something to multiply with without modifying answer, as 0 would of course return a 0
  
  for (let i = length - 1; i >= 0; i--) {
      answer[i] *= endValue;
      endValue *= nums[i];
  }
  
  return answer;
};