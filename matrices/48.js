/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Going to try to rotate by transposing along main diagonal and then reflecting from left to right according to given solution. This is effectively the same as rotating clockwise 90 degrees. Long comments for my understanding
var rotate = function(matrix) {
  const transpose = function(matrix) { //transpose each value row by row, this means going left to right row by row, and swapping the current value with the value at it's opposite x and y coordinate, so value at 3,1 is swapped with value at 1,3. Start one above whatever i is for inner loop value as this avoids swapping the diagonal when referencing j for index. First loop i = 0, so we want to swap 1,0 with 0,1 i.e. swapping j,i with i,j. This means only one "side" of the diagonal needs to be directly referenced, as the other side can be acquired by swapping x and y components
      for (let i = 0; i < matrix.length; i++) {
          for (let j = i + 1; j < matrix.length; j++) { 
              const tmp = matrix[j][i]; //temporary variable so as to be able to reference matrix[i][j] original value for following line...
              matrix[j][i] = matrix[i][j];
              matrix[i][j] = tmp; //now swap matrix[i][j] to desired value since reference is done
          }
      }
  };
  
  const reflect = function(matrix) { //now that the matrix is transposed, loop through one half of the matrix and reflect values left to right, this means if we're looking at a 6x6 matrix, element of x,y = 0,1 now becomes x,y = 5,1. This works as well for odd value dimensions, as values at the centre column stay at the centre column during horizontal reflection
      for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix.length/2; j++) {
              const tmp = matrix[i][j]; //same as transpose, temporary variable needed for future reference of matrix[i][j]
              matrix[i][j] = matrix[i][matrix.length - j - 1]; //j is used to work upwards from index 0, as well as work downwards from index of the matrix length - 1 so as to swap the correct values between horizontal x indices
              matrix[i][matrix.length - j - 1] = tmp; //notice this takes the same form as transpose... set temporary variable for current value, alter current value, then swap current value, that was saved to temporary variable, to new desired location
          }
      }
  };
  
  transpose(matrix);
  reflect(matrix);
  return(matrix);
};