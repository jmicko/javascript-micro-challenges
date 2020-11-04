console.log('LoopsArrayOfObjects js');

function totalYearsOfExperience(company){
    // start a variable to hold the sum value
    let totalYears = 0;
    // dig into the first level of the array, look at each object 1 at a time
    for (const employee of company) {
        // add the years tp to the totalYears sum
        totalYears += employee.yearsOfExperience;
    }
    // return the sum
    return totalYears;
}

// test
console.log('should log 14', totalYearsOfExperience([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 }
]));
console.log('should log 28', totalYearsOfExperience([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
]));