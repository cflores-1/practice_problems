function longestPeak(array) {
    //declare the length that will store our longest peak
      let longestPeakLength = 0;
      //initalize index at 1, bc we have to start at the second value of the array
      //we know a peak won't be first
      let i = 1
      //Traversing array with while loop:
      //while i is less than length of array
      //we are looking for the tips of peaks
      while (i < array.length - 1) {
      //check if our current value is strictly greater than our previous value 
      //and next value then we have a peak
          //comparing the value with it's adjacent values
          const isPeak = array[i-1] < array[i] and array[i] > array[i+1]
          if (!isPeak) {
              i++;
              continue;
          }
          //checking to see if this value at this index is less than array[i-1]
          let leftIdx = i-2
          //as the left index is in bound greater than or equal to zero
          //and so long as the index at the left index is strictly smaller
          //than the array to the right of it we keep going 
          while (leftIdx >= 0 and array[leftIdx] < array[leftIdx + 1]) {
              leftIdx--;
          }
          //so long as the right index is 
          let rightIdx = i+2;
          //so long as this is true we will increment to the right index
          while (rightIdx < array.length && array[rightIdx] < array[rightIdx -1]){
              rightIdx++;
          }
          //compute the length of the peak:
          const currentPeakLength = rightIdx - leftIdx - 1;
          //longestPeakLength is the max of the 
          longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
          i = rightIdx;
      }
      return longestPeakLength;			
  }
//O(n) time bc length of array
//space 0(1)  