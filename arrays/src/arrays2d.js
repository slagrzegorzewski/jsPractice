document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let myArrayOne = [
                  [7,3],
                  ["tom", "voldemort"],
                  [true, false],
                  [11, 13, 15, 16],
                  [17, 19, 47]
              ];

    let myArrayTwo = [
                  [1,2,3,4],
                  [5, 6, 7, 8],
                  [9, 10, 11 , 12]
            ];

    console.log(myArrayOne[1][1]);
    console.log(myArrayOne[3].length);
    console.log(myArrayOne[4][2]);

    var printArray = (array) => {
        let i;
        for(i=0; i<array.length; i++){
            console.log(array[i]);
            console.log("length: " + array[i].length);
            let j;
            for(j=0; j<array[i].length; j++){
                console.log(array[i][j]);
            }
        };
    };

    let create2dArray = (rows, columns) => {
        let tabOutside = [],
            number = 0,
            i;

        for(i=0; i<rows; i++){
            let tabInside = [],
                j;
            tabOutside.push(tabInside);

            for(j=0;j<columns; j++){
                number = number + 1;
                tabInside.push(number);
            }
        }
        return tabOutside;
    }

    printArray(myArrayTwo);
    var print2dArray = create2dArray(5,5);
    console.log(print2dArray);
});
