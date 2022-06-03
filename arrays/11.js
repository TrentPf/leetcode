/**
 * @param {number[]} height
 * @return {number}
 */

//like other array problems in the set, two-pointer approach will be taken

var maxArea = function(height) {
  let maxArea = 0; //tracking a volume so 0 is the absolute minimum, quantities don't exist in negatives
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
      let width = right - left;
      
      maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width); //check maxarea is greater than the maxarea of the current container, containers are always gated by their smallest height in this scenario so use the min of the two elements
      
      if (height[left] <= height[right]) { //move index of left or right depending on which one's smaller, if equal just move whichever one, so moving left for sake of ease in writing readable conditional statements
          left++;
      } else {
          right--;
      }
  }
  
  return maxArea;
};