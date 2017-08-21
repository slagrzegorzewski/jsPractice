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
});
