const _ = require("lodash");

const numbers = [33, 44, 55, 66, 77, 88, 99];

_.each(numbers, function(number, i){
    console.log(number)
})