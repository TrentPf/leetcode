/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    
  let newStart = newInterval[0];
  let newEnd = newInterval[1];
  
  let idx = 0;
  let n = intervals.length;
  
  let output = [];
  
  while (idx < n && newStart > intervals[idx][1]) {
      output.push(intervals[idx++]);
  }
  
  let interval;   
  
  while (idx < n && intervals[idx][0] <= newEnd) {
      newStart = Math.min(newStart, intervals[idx][0]);
      newEnd = Math.max(newEnd, intervals[idx][1]);
      ++idx;
  }
  
  output.push([newStart, newEnd]);
  
  while (idx < n) {
      output.push(intervals[idx++]);
  }
  
  return output;
};