/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//loop through each direction once per while loop iteration and reduce boundries at end. Remember that on the last direction, since it's a spiral, it's last value/element will have already been read and pushed, so augment loop accordingly. This will be the up direction loop that is altered slightly.
var spiralOrder = function(matrix) {
  let result = [];
  
  let rows = matrix.length;
  let columns = matrix[0].length;
  //following 4 lines are for upper and lower boundries for each directional pair, up/down left/right
  let up = 0; 
  let down = rows - 1;
  let left = 0;
  let right = columns - 1;
  
  while (result.length < rows * columns) { //keep doing the loop until all values have been added to result
      
      for (let i = left; i <= right; i++) { //move from left to right and push values
          result.push(matrix[up][i]);
      }
      
      for (let i = up + 1; i <= down; i++) { //now move from the top right to the bottom right
          result.push(matrix[i][right]);
      }
      
      if (up != down) { //now bottom right to bottom left, this means going from upper limit to lower limit now. This loop and the following one are only done if the upper and lower boundaries aren't equal, as if they're equal, it means we will pass over values we've already pushed. This exception should only occur in matrices with an even number of rows.
          for (let i = right - 1; i >= left; i--) { 
              result.push(matrix[down][i]);
          }
      }
      
      if (left != right) { //and like before, but bottom left to top left LESS 1 due to the fact that the last direction will head in the direction of the first element checked in each while loop iteration. This means each loop we must account for this is going from south to north.
          for (let i = down - 1; i > up; i--) {
              result.push(matrix[i][left]);
          }
      }
      up++; //update all boundaries now that the outermost unchecked values have been added to result. 
      down--;
      left++;
      right--;        
  }
  
  return result;
};