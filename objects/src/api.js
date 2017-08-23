document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let dog = function(name, group, weight, toy){
        this.name = name;
        this.group = group;
        this.weight = weight;
        this.toy = toy;
        this.play = function(putToy){
            if(putToy.toLowerCase() === "ball"){
                console.log(name + " Go! Catch a ball!");
            }
            else if(putToy.toLowerCase() === "rabbit"){
                console.log(name + " Chase a rabbit!");
            }
            else{
                console.log(name + " Go! Find a toy!");
            }
        };
    };

    let leia = new dog("Leia", "schnauzer", 8, "rabbit");
    let coco = new dog("Coco", "yorkshire", 5, "ball");
    console.log(leia);
    console.log(coco);
    leia.play("ball");
    coco.play("rabbit");

    leia.injectionHistory = ["20.09.2016", "17.02.2016", "20.09.2017"];
    console.log(leia);
    leia.newInjection = function(date){
        this.date = date;
        leia.injectionHistory.push(date);
        console.log("Next injection: " + date);
    }
    leia.newInjection("26.12.2017");
    console.log(leia.injectionHistory);

    let Calculator = function(){
        this.numOne;
        this.numTwo;
        this.results = [];
    }

    let scoreCalculator = new Calculator();

    Calculator.prototype.add = function(a,b){
        this.numOne = a;
        this.numTwo = b;
        const solution = a + b;
        const msg = "Added " + a + " to " + b + " got: " + solution;
        this.results.push(msg);
        return msg;
    };
    Calculator.prototype.multip = function(a,b){
        this.numOne = a;
        this.numTwo = b;
        const solution = a * b;
        const msg = "Multiplied " + a + " to " + b + " got: " + solution;
        this.results.push(msg);
        return msg;
    };
    Calculator.prototype.substract = function(a,b){
        this.numOne = a;
        this.numTwo = b;
        const solution = a - b;
        const msg = "Substracted " + a + " to " + b + " got: " + solution;
        this.results.push(msg);
        return msg;
    };
    Calculator.prototype.divide = function(a,b){
        this.numOne = a;
        this.numTwo = b;
        const solution = a / b;
        const msg = "Divided " + a + " to " + b + " got: " + solution;
        this.results.push(msg);
        return msg;
    };
    Calculator.prototype.printOperations = function(){
        console.log(scoreCalculator.results);
    };
    Calculator.prototype.clearOperations = function(){
        let i,
            arrLength = this.results.length;
        for(i=0; i<arrLength; i++){
            if(arrLength === 1){
                this.results.splice(0);
            }else{
                this.results.splice(0,i);
            }
        }
    };
    let addCalc = scoreCalculator.add(10,10);
    scoreCalculator.add(23,30);
    scoreCalculator.multip(4,10);
    scoreCalculator.substract(33,11);
    scoreCalculator.substract(33,11);
    scoreCalculator.substract(33,11);
    scoreCalculator.divide(33,11);
    scoreCalculator.divide(33,11);
    scoreCalculator.divide(33,11);
    scoreCalculator.printOperations();
    scoreCalculator.clearOperations();
    scoreCalculator.printOperations();
});
