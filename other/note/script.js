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

/* const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);
 */

/* const  fs = require("fs");

/* const files = fs.readdirSync("./")
console.log(files); */

/* const filesas = fs.readdir("$", function(err, files){
    if (err) console.log("error", err);
    else console.log("result", files);

})
 */

/* 
 const EventEmitter = require("events");
 const emitter = new EventEmitter();

 emitter.on("messageLogged", function(){
     console.log("listener called")
 })
 emitter.emit("messageLogged"); */

/* 
 const y = require("events");
const x = new y() 
 x.on("true", function(){
     console.log("emitter works")
 })
 x.emit("true"); */
/* 
const http = require("http");
const server = http.createServer();
server.listen(3000);
console.log("listening on port 3000...")

server.on("connection", (socket) =>{
    console.log("new connection...")
}) */

/* function x(){
    return ("ahoj")
}
module.exports = x */

/* import {x as funkce, x} from "./logger.js";

console.log(x()) */



/* const funkce = require("./logger.js")
console.log(funkce("message"))
 */

 /* const funkce = require("./logger.js")
console.log(funkce.toto("ahoj")) */

var x = require("./logger.js")
x.toto