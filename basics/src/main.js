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

})
