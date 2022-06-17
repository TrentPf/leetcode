/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) { //0 meetings means no rooms needed
      return 0;
  }
  
  let usedRooms = 0; //counter for needed rooms
  
  let startTimes = []; 
  let endTimes = []; 
  
  for (let i = 0; i < intervals.length; i++) {
      startTimes.push(intervals[i][0]);
      endTimes.push(intervals[i][1]);
  }
  
  startTimes.sort((a, b) => a - b); //sorted array of start times
  endTimes.sort((a, b) => a - b); //sorted array of end times
  
  let startPointer = 0; //pointer for start time components, increments every loop
  let endPointer = 0; //pointer for end time components, increments anytime there is NOT a conflict with a start time
  
  while (startPointer < intervals.length) { //loop through and add rooms to usedRooms counter every loop. Anytime there is not a conflict with a starting and ending time, that means a room has freed up and therefore another room is not needed to accommodate. Since every comparison either conflicts or doesn't conflict, we can increment usedRooms every loop, and if there is ever a free room, we can decrement usedRooms as well to make a sum change of 0 i.e. using a room that has freed up
      if (startTimes[startPointer] >= endTimes[endPointer]) { //if as room has freed up
          usedRooms -= 1;
          endPointer += 1; //only increment endPointer in the case that the sorted list of startTimes is now at an element that exceeds the sorted endTimes pointer element, all potential conflicts have been found at this point for this end time and can move on
      }
      
      usedRooms += 1; //increment regardless of room freeing up or not. If no free room, we add a room to the counter, if  there is a free room, we add a room to the counter, but we already removed one in the previous conditional, so works out to no change
      startPointer += 1; //pointer acts as the main looping mechanism, always increments so as to compare every start time to the current highest end time
  }
  
  return usedRooms;
};