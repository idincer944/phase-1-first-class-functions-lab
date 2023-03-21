const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => {
    let newArray = [drivers[0], drivers[1]];
    return newArray;
    
}

const returnLastTwoDrivers = (drivers) => {
    let newArray = [drivers[drivers.length - 2], drivers[drivers.length - 1]];
    return newArray;
    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (int) => {
    return function (fare) {
        return fare * int
    };
}   

const newVariable = createFareMultiplier;

const fareDoubler = (int) => {
    return int * 2;
}

const fareTripler = (int) => {
    return int * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))

