/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) { //binary search like 153, extra checks to make sure mid points and left and right are in certain ranges relative to the target value
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) { //checking the mid for target, mid value gets moved so this is the only check that's needed
          return mid;
      }
      
      if (nums[left] <= nums[mid]) { //checking that left half is ascending
           if (nums[left] <= target && target < nums[mid]) { //checking that target is in left half and that target is not the upperbound i.e. the mid point of the array
               right = mid - 1;
           } else {
               left = mid + 1;
           }
      } else { //checking right half if left half isn't ascending
           if (nums[mid] < target && target <= nums[right]) { //checking if target is in right half and that target is not equal to the lower bound i.e. the mid point of the array
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
  }
  
  return -1; //if target not found
};