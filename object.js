'use strict';
// @ts-check

/** 
 * PROGRAM BY
 * DANIEL EMMANUEL
 * PROGRAM TO SORT A LIST
 * OF NUMBERS
*/

/**
 * @param {Array} List this array to be sorted
 */
function Sort(List) {
  console.log('Initial Values', List);
  for(let i = 0; i < List.length * List.length; i++) {
    List.forEach((element, index) => {
        if(List[index] > List[index + 1]) {
            let one = List[index];
            List[index] = List[index + 1];
            List[index + 1] = one;
        }
        if (List[index] < List[index + 1]) {
            List[index + 1] = List[index + 1];
        } if (List[index] === List[index + 1]) {
            List[index + 1] = List[index];
        }
      })
  }
  return List;
}



const VALUES = [3, 6,10, 3, 5, 8, 9, 0, -1, -200, 200, 46, 50, 0];
let newList = Sort(VALUES);
console.log('Final Value', newList);