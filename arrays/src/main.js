document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let myArray = [2,2,4,4];
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


    let distFromAvarage = (array) =>{

    let wynik = 0,
        i;
    let distTab = [];
    for(i=0; i<array.length; i++){
        wynik = wynik + array[i];
    }
    let mediana = wynik / i;
    console.log("Średnia elementów tablicy wynosi: " + (mediana));

    for(i=0; i<array.length; i++){
        if(array[i] <= mediana){
            let diffNumToNum = mediana - array[i];
            distTab.push(diffNumToNum);
        } else if( array[i] > mediana ){
            let diffNumToNum = array[i] - mediana;
            distTab.push(diffNumToNum);
        }
    }
    console.log(tabSummary + " = " + distTab);
}

var tabSummary = [2, 4, 8, 3, 3];
var showSummaryTab = distFromAvarage(tabSummary);

let factors = (number) => {
    let myTab = [],
        i;
    if(number > 0){
        for(i=0;i<number;i++){
            if(number % i === 0){
                myTab.unshift(i);
                // unshift adds one or more elements to the begining of the array
            }
        }
    }
    else if(number <= 0){
        console.log("Put number bigger than 0.");
    }
    console.log("for number: " + number + ", we have: " + myTab);
}
var getFactorsNumbers = factors(54);
getFactorsNumbers;

let getMissingNumbers = (array) => {
    let tabWithMissingNumbers = [],
        i;
    for(i=1; i<=array.length;i++){
        let difference = array[i] - array[i-1];
        if(difference !==1){
            // checking difference of numer is greater than 1
            // pushing number to array
            for(let j=(difference-1); j>=1; j--){
                tabWithMissingNumbers.push(array[i] - j);
            }
        }
    }
    if(tabWithMissingNumbers.length > 0){
        return tabWithMissingNumbers;
    }
    else{
        return null;
    }
};
let tabWithNumbers = [-2, 1, 5, 9, 11, 20];
let showMissingNumbers = getMissingNumbers(tabWithNumbers);
console.log(tabWithNumbers + " = " + showMissingNumbers);
})
