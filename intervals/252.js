/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //sorting array to make this problem trivial, any overlaps between upper value and next elements lower value makes it impossible to attend all meetings
  
  for (let i = 0; i < intervals.length - 1; i++) { //loop 1 less time than the length of the array so can neglect setting an initial compare variable at the first element by comparing to the upcoming element, otherwise will get index out of range on final loop due to right side's "i + 1"
      if (intervals[i][1] > intervals[i + 1][0]) { //if there's overlap, can't make all meetings so immediately return false
          return false;
      }
  }
  return true; //if the loop never returned, there were no overlaps, return true
};