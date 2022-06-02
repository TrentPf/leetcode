/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//implement left/right sort to the right of current index, move left towards right and record any triplets where i + left + right equals 0. Array is sorted before implementation, so anytime triplet is positive, move the right index to the left, negative moves the left index to the right. Anytime i starts at a number greater than 0, there's no possible way to get a sum of 0, as the array is sorted ascending, and all numbers to the right are positives, break on these cases and don't bother continuing. 

const twoSumII = function(sorted, i, result) { 
  let left = i + 1; //left always start one to the right of i
  let right = sorted.length - 1; //right is the uppermost index
  
  while (left < right) { //keep running this until left and right are equal i.e. left is no longer less than right
      let sum = sorted[i] + sorted[left] + sorted[right]; //sum the values of the triplet
      
      if (sum < 0) { //if sum is less than 0, move left index to the right as this will potentially increase the value at that new index
          ++left;
      } else if (sum > 0) { //if sum is more than 0, move right index to the left as this will potentially decrease the value at that new index
          --right;
      } else { //if it's not positive or negative, it's 0. push the triplet to the result array and increment until a new unique value at left index is found to avoid duplicate triplets. If no new unique value is found before left = right, then exit
          result.push([sorted[i], sorted[left++], sorted[right--]]);
          while (left < right && sorted[left] === sorted[left - 1]) {
              ++left;
          }
      }
  }
};

var threeSum = function(nums) {
  let sorted = nums.sort(function(a, b){return a - b}); //sort the array for purpose of two-pointer search
  let result = [];
  
  
  for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > 0) { //if i is greater than 0, all values in the sorted array to the right of it are positive, there is no possible way to get a sum of 0 at this point so break the loop
          break;
      }
      
      if (i === 0 || sorted[i - 1] != sorted[i]) { //assuming we didn't break, if at the first index or at a different index and current index element is not the same as the previous i.e. unique, run the two-pointer search function
          twoSumII(sorted, i, result);
      }
  }
  
  return result;
};