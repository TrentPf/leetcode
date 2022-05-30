/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    
  if (nums.length === 1) { //array with one element has minimum of that element
      return nums[0];
  }
  
  let left = 0;
  let right = nums.length - 1;
  
  if (nums[right] > nums[0]) { //only case where this happens is when array is rotated times equal to the array length i.e. rotated in a way that it is still the same array. Since the array is sorted ascending, this means that the first index is the minimum
      return nums[0]; 
  }
  
  while (right >= left) {
      let mid = Math.floor(left + (right - left) / 2); //divide array in half and search each half
      
      if (nums[mid] > nums[mid + 1]) { //if the current index element is greater than the next, return the next as it's the min in a rotated sorted array
          return nums[mid + 1];
      }
      
      if (nums[mid - 1] > nums[mid]) { //same as previous conditional, but checking that the previous element is larger than the current
          return nums[mid];
      }
      
      if (nums[mid] > nums[0]) { //using line 17, if the mid value is greater than the first element, increment the left value to that we can continue searching the right half of the array, as a rotated sorted list will have the min to the right of larger values
          left = mid + 1;
      } else { //same as previous conditional, but increasing right (checking the left half) because if the middle element is not larger than the first, that means the minimum is somewhere to the left of the mid element
          right = mid + 1;
      }
  }   
  
  return -1; 
};