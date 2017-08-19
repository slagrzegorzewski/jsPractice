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

    function letsRock(k) {
        for(let x = 1; x <= k; x++){
            console.log(x + "Check this Out!");
        };
    }

    let rentCost = (days) => {
        if(days == 1){
            console.log("Cost for one day will be: 200 pln");
        }
        else if(days > 1 && days < 4){
            let twoThreeDays = 180 * days;
            console.log("Visit cost for: " + days + " days, will be: " + twoThreeDays);
        }
        else if(days > 3 && days < 8){
            let fourSevenDays = days * 160;
            console.log("Visit cost for: " + days + " days, will be: " + fourSevenDays);
        }
        else if(days > 7){
            let evenThanSeven = days * 150,
                numbersOfWeeks = Math.floor(days / 7),
                totalCost = evenThanSeven - numbersOfWeeks * 50;
            console.log("promotion: " + numbersOfWeeks * 50);
            console.log("Visit cost for: " + days + " days, will be: " + totalCost);
        }
    };

    let calculateTip = (amount, raiting) => {

        switch(raiting) {
            case "verry good" :
//                var tip = amount * 0.1;
                console.log("Amount for meal: " + amount);
                console.log("Tip: " + amount * 0.1);
                break;

            case "good" :
//                const tip = amount * 0.08;
                console.log("Amount for meal: " + amount);
                console.log("Tip: " + amount * 0.08);
                break;

            case "medium" :
//                const tip = amount * 0.05;
                console.log("Amount for meal: " + amount);
                console.log("Tip: " + amount * 0.05);
                break;

            case "bad" :
                console.log("Amount for meal: " + amount);
                console.log("Tip: 0");
                break;

            default :
                console.log("Please, select one of options");
        }
    };

    let chckFunction = letsRock(10);
    console.log(chckFunction);

    console.log(mixing("Banana"));
    console.log(moreThan(33.1,33));
    console.log(numSum(3,3,7));
    rentCost(5);
    rentCost(1);
    rentCost(3);
    rentCost(8);

    calculateTip(200, "good");
    calculateTip(100, "verry good");
})
