// step 1 =  store Array in  a variable;
// step 2 =  iterate the loop up to length of the Array
// step 2.1= again loop to the Array from i+1 to the length of the Array
// step 2.2= check tha condition is there any duplicate charecter
// step 3 = if found duplicate charecter then print it

let arr = [d, e, t, g, e, o, o];
for (let i = 0; i < arr.length; i++) {
  for (a = i + 1; i < arr.length; i++) {
    if (arr[i] === arr[a]) {
      console.log("fund the duplicate" + [i]);
    }
  }
}
