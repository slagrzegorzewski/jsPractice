document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const mixing = (fruitVegetable) => {
        if(typeof fruitVegetable == "string"){
            return "You are mixing: " + fruitVegetable;
        }
        else{
            return "You must put some vegetable or fruit to mix!";
        }
    }
    const moreThan = (numA, numB) => {
        if(numA > numB){
            return "Number A: " + numA + " is more than number B: " + numB;
        }
        else if(numA === numB){
            return "Those numbers are equal."
        }
        else{
            return "Number B: " + numB + " is more than number A: " + numA;
        }
    }
    const numSum = (numA, numB, numC) => {
        return numA + numB + numC;
    }

    console.log(mixing("Banana"));
    console.log(moreThan(33.1,33));
    console.log(numSum(3,3,7));
})
