/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    
  if (intervals.length === 0) { //empty array has no intervals therefore count is 0
      return 0;
  }
  
  intervals.sort((a, b) => a[0] - b[0]); //sort array by bottom range value in element for ease of comparisons in following code
  
  let end = intervals[0][1]; //start comparison with first element's upper value
  let count = 0; //track number of arrays removed
  
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < end) { //if current element's lower value is less than the previous element's upper value, there's an overlap, increment count as previous interval should be removed
          count++;
      } else { //if no overlap, set end to the upper value of the current interval and compare it to the next interval's bottom value in the same way on the next loop through. This evidently means we don't increment count as there is no overlap
          end = intervals[i][1];
      }
  }
  return count;
};