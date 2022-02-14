'use strict';

const allCashBox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {

    let averageCheck = 0;

    for (let i = 0; i < arr.length; i++) {
        averageCheck += arr[i] / arr.length;
    }

    return console.log(Math.floor(averageCheck));
}

getAverageValue(allCashBox);

