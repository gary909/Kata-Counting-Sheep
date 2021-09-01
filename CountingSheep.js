var array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  null, undefined, true ,
                true,  true,  true,  true ,
                false, false, true,  true, ];
   
function countSheeps(arrayOfSheep) {
    var total = 0;
    for (var i = 0; i < arrayOfSheep.length; i++){
        if (arrayOfSheep[i] == true) {
            total = total + arrayOfSheep[i];
        } else {
            
        }
    }
    return total;
    }

console.log(countSheeps(array1)); // Returns: 17, "There are 17 sheeps in total"