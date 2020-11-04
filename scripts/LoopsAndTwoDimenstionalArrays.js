console.log('LoopsAndTwoDimenstionalArrays js');

function sumArray(arr){
    // start a variable to hold the sum value
    let sum = 0;
    // dig into the first level of the array, look at each secondary array 1 at a time
    for (const secondArray of arr) {
        // dig into the second level of the array, looking at each value in the secondary array
        for (const number of secondArray) {
            // add each number to the sum variable
            sum += number;
        }
    }
    // return the sum
    return sum;
}

// test
console.log('should log 15', sumArray([ [1, 2], [3, 4, 5] ]));
console.log('should log 21', sumArray([ [1, 2], [3, 4, 5], [6] ]));