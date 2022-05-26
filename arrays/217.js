/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
  const sorted = nums.sort(function(a, b){return a-b}); // sorted array means that if any duplicates exist they should be next to each other, can just compare current pass in loop with upcoming
  
  for (let i = 0; i < sorted.length; ++i) {
      if (nums[i] === nums[i+1]) {
          return true;
      }
      
  }
  
  return false;
};