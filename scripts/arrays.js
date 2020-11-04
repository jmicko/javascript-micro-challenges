console.log('arrays js');

// take an array input
function firstAndLast(arr){
    // add the first indexed item to the item at one less index than the length of the array
    let num = arr[0] + arr[arr.length - 1];
    // return the result
    return num;
}

// test
console.log('should log 6:', firstAndLast([1, 2, 3, 4, 5]));
console.log('should log 18:', firstAndLast([6, 7, 8, 9, 10, 11, 12]));