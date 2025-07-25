//  Q1

// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

// function getFirstValue(arr){
//     arr.shift()
//     return arr;
// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

// Q2 


// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]
// Notes
// N/A
// Test.assertSimilar(makePair(1, 2), [1, 2]);
// Test.assertSimilar(makePair(21, 82), [21, 82]);
// Test.assertSimilar(makePair(4213, 526), [4213, 526]);

// function makePair(num1, num2){
//     let output = [];
//     output.push(num1)
//     output.push(num2)
//     return output;
// }
// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));


// Q3

// Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]

// drop([1, 2, 3], 2) ➞ [3]

// drop([1, 2, 3], 5) ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

// function drop(arr, val){
// arr.splice(0, val);
//   if (arr) {
//     return arr;
//   }else if (!arr <= 0) {
//     return arr;
//   } else if (!arr < 0){
//     return arr
//   }
// }
// console.log(drop([1, 2, 3], 1));
// console.log(drop([1, 2, 3], 2));
// console.log(drop([1, 2, 3], 5));
// console.log(drop([1, 2, 3], 0));
// console.log(drop(["banana", "orange", "watermelon", "mango"], 2)); // , ["watermelon","mango"]
// console.log(drop([], 2), []);


// Q4

// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// Notes
// You can expect only positive integers for vote counts.

// test different versions
// (getVoteCount({ upvotes: 13, downvotes: 0 }), 13);
// (getVoteCount({ upvotes: 2, downvotes: 33 }), -31);
// (getVoteCount({ upvotes: 132, downvotes: 132 }), 0);
// (getVoteCount({ upvotes: 0, downvotes: 0 }), 0);
// (getVoteCount({ downvotes: 4, upvotes: 1 }), -3);


// function getVoteCount({ upvotes, downvotes}) {
//     Number(upvotes)
//     Number(downvotes)
//     if(upvotes === downvotes){
//         return 0
//     }else if (upvotes < downvotes){
//         return upvotes - downvotes;
//     }else {
//         return upvotes - downvotes;
//     }
// }
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

