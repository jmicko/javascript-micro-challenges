console.log('conditional js');

function bigger(num1, num2) {
    if (num1 > num2) {
        return "The first number was bigger!";
    } else if (num1 < num2) {
        return "The second number was bigger!";
    }
    return "The numbers are the same!";
}

// test
console.log('should log "The first number was bigger!"', bigger(3, 2));
console.log('should log "The numbers are the same!"', bigger(7, 7));
console.log('should log "The second number was bigger!"', bigger(2, 7));
