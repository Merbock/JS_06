'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(prefix + ' ' + arr[i]);
    }

    return console.log(newArr);
}

addPrefix(names, 'Mr')