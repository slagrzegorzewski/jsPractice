document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const myArray = [2,2,4,4];
    /*console.log(myArray[1]);
    console.log(myArray[myArray.length-1]);

    for (let i in myArray){
        console.log(myArray[i]);
    };

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }*/

    const addArray = (array) => {
        let arr = 0;
        for (let i in array) {
            arr += array[i];
        };
        console.log(arr);
    };
    addArray(myArray);

    const multiArray = (array) => {
        let arr = 1;
        for (let i in array) {
            arr *= array[i];
        };
        console.log(arr);
    };

    multiArray(myArray);

    /*
    if we use loop:
    for(i in array){...}
    we give a different score than we expected: 1.33
    i must find why.
    */
    let getAverage = (array) => {
        let arr = 0,
            i;
        for (i = 0; i < array.length; i++) {
            arr += array[i];
        };
        console.log("Average of this array: " + (arr / i));
    };

    getAverage(myArray);
})
