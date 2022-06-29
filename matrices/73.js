/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//have to go over this code, but my understanding of the algorithm is to mark the left and upper most values
//for any row or column respectively that has a 0, this means if x = 2 y = 4 has a 0, mark 0, 4 and 2, 0 with 0s. 
//This means later we can loop through just the first row and column and anytime a 0 appears, designate all other values in this row/column as 0
 var setZeroes = function(matrix) {
  let isCol = false;
  let rowSize = matrix.length;
  let columnSize = matrix[0].length;
  
  for (let i = 0; i < rowSize; i++) {
      
      if (matrix[i][0] === 0) {
          isCol = true; //variable to track if first column has a 0 value
      }
      
      for (let j = 1; j < columnSize; j++) {
          
          if (matrix[i][j] === 0) {
              matrix[0][j] = 0;
              matrix[i][0] = 0;
          }
      }
  }
  
  for (let i = 1; i < rowSize; i++) {
      for (let j = 1; j < columnSize; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
  }
  
  if (matrix[0][0] === 0) {
      for (let j = 0; j < columnSize; j++) {
          matrix[0][j] = 0;
      }
  }
  
  if (isCol) {
      for (let i = 0; i < rowSize.length; i++) {
          matrix[i][0] = 0;
      }
  }
};