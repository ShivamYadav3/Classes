//  1 - create a function with a parameters
//  2 - write a loop up to length of the Array
//  3 - check the condition for tha value have again  repeat it self or Not
//  3.1-if it is repeting so return true
//  4 - else return false

const arr = [1, 2, 3, 3, 4, 4, 4, 5, 5]; // [3,4,5]
// const arr1 = [1, 3, 5, 6];
// const arr2 = [1, 9, 9, 5];
// const arr3 = [1, 6, 9, 5];

const checkDuplicate = (input) => {
    let blank=[]
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        if(!blank.includes(input[j])){
            blank.push(input[j])
            break
        }
      }
    }
  }
  return blank
};
console.log(checkDuplicate(arr));
// console.log(checkDuplicate(arr1));
// console.log(checkDuplicate(arr2));
// console.log(checkDuplicate(arr3));





// const removeDuplicate = (input) => {
//   let arr5 = [];
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         if (!arr5.includes(input[i])) {
//           arr5.push(input[i]);
//         }
//       }
//     }
//   }
//   return arr5;
// };
// console.log(removeDuplicate(arr));
// console.log(removeDuplicate(arr1));
// console.log(removeDuplicate(arr2));
// console.log(removeDuplicate(arr3));

const FindDuplicate = arr.filter((data, item)=>arr.indexOf(data)!==item);

// const arr3=Array.from(new Set(FindDuplicate) )
// const arr3=[...new Set(FindDuplicate)]


// console.log("okk ", FindDuplicate)
