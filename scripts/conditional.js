console.log('conditional js');

// take 2 inputs
function bigger(num1, num2) {
    // check if num1 is bigger
    if (num1 > num2) {
        return "The first number was bigger!";
        // otherwise check if num2 is bigger
    } else if (num1 < num2) {
        return "The second number was bigger!";
    }
    // if neither is bigger, they must be equal
    return "The numbers are the same!";
}

// test
console.log('should log "The first number was bigger!"', bigger(3, 2));
console.log('should log "The numbers are the same!"', bigger(7, 7));
console.log('should log "The second number was bigger!"', bigger(2, 7));
