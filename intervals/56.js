/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //sort array so that all x values are sorted ascending, this way only need to check y values that are not necessarily sorted
  
  let output = []; //push to this array for finished merge
  
  for (const interval of intervals) { //loop thru and check x and y values
      if (output.length === 0 || output[output.length - 1][1] < interval[0]) { //if the array is empty or the end elements y value is less than the current interval's x value, push the current interval as it does not overlap with the previous and therefore is a new interval. Sorted list so this means it's the next value ascending for x values in elements
          output.push(interval);
      } else { //otherwise, current interval and last interval do overlap, since it's a sorted list, this means the x values of these elements are identical, take the one with the larger y value
          output[output.length - 1][1] = Math.max(output[output.length - 1][1], interval[1]);
      }
  }
  
  return output;
};