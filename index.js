// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0, 2);

const returnLastTwoDrivers = () => drivers.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function fare(multiplySomeValue) {
    return function finalFare(someValue) {
        return multiplySomeValue * someValue;
    };
}

function fareDoubler (fare) {
    return fare * 2;
}

function fareTripler (fare) {
    return fare * 3;
}

const selectDifferentDrivers = function(drivers, differentDrivers) {
    return differentDrivers(drivers);
}