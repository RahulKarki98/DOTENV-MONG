const os = require("os")

// console.log("cpuprocessor",os.cpus())
// console.log("osversion",os.version())
console.log("Total Memory",os.totalmem()/1024/1024)
console.log("Free Memory",os.freemem()/1024/1024)




//node sum.js