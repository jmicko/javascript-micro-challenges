console.log('LoopsArraysAndConcatenation js');

function concat(arr, num){
    // start a variable to hold the string
    let string = '';
    // make a for loop that start at the index given in 2nd arg
    for (let i = num; i < arr.length; i++) {
        const word = arr[i];
        string += (word + ' ')
    }
    return string;
}

// test
console.log('should log "Hi There!"', concat(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
console.log('should log "Oh! Hi There!"', concat(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));