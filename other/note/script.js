/* function x(){
    console.log("hello");
}

x();

console.log(window); */

/* var message = "tt"; // není globální
console.log(global.message) */


/* const logger = require("./logger.js") 
logger.bjorg("message"); */

/* var log = require("./logger.js")
log("messa"); */

/* const path = require("path")

console.log(path.parse(__filename)); */

const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);
