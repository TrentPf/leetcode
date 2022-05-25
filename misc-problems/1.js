/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let numbersObj = {}; 
  
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]; //current numbers complement will need to exist in the object to be one half of the correct two sum
      
      if (complement in numbersObj) { //check for what's mentioned in previous comment
          return [numbersObj[complement], i];
      }
      
      numbersObj[nums[i]] = i; //record value and it's index if check with nums[i] didn't produce a valid two sum
  }
  
  return null;
};