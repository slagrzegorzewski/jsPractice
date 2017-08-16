document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    console.log("test");

    const num = 45,
          str = "magic works!",
          bool = true,
          s = Symbol("MyKey"),
          n = null,
          obj = {
              name: "Harry Potter",
              age: 10,
              house: "Gryffindor"
          };
    let und;
    let ulEl = document.querySelector("ul"),
        linNum = document.querySelector("#number"),
        linStr = document.querySelector("#string"),
        linBool = document.querySelector("#boolean"),
        linSym = document.querySelector("#object"),
        linNull = document.querySelector("#null"),
        linObj = document.querySelector("#symbol"),
        linUnd = document.querySelector("#undefine");

    ulEl.classList.add("list")

    linNum.innerText = "Type of const: " + num + " is " + typeof num;
    linStr.innerText = "Type of const: " + str + " is " + typeof str;
    linBool.innerText = "Type of const: " + bool + " is " + typeof bool;
    linSym.innerText = "Type of symbol " + " is " + typeof s;
    linNull.innerText = "Type of const: " + n + " is " + typeof n;
    linObj.innerText = "Type of const: " + obj + " is " + typeof obj;
    linUnd.innerText = "Type of const: " + und + " is " + typeof und;

    let chckWeather = (weather) => {
        if(weather.toLowerCase() == "raining"){
            console.log("It's raining! Take umbrella.");
        }
        else if(weather.toLowerCase() == "snowing"){
            console.log("It`s snowing! Wear up warm");
        }
        else if(weather.toLowerCase() == "sunny"){
            console.log("Sunndy day!");
        }else{
            console.log("Check weather one more time");
        }
    }
    chckWeather("raining");
    chckWeather("snowing");
    chckWeather("sunny");
    chckWeather("i dont know");

    let chckNumbers = (number) => {
        for(var i = 0; i < number + 1; i++){
            if(i % 2 == 0){
                console.log(i + " is even number");
            }
            else{
                console.log(i + " id odd number");
            }
        }
    }

    chckNumbers(25);

})
