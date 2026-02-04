const os = require("node:os");

console.log(os.EOL); //For next Line
console.log(os.availableParallelism()); //return integer
console.log(os.arch); //return cpu Architecture
console.log(os.constants); //return constants object
console.log(os.cpus()); //return array of objects
console.log(os.devNull); //return \\.\null
console.log(os.endianness()); //return BE or LE
console.log(os.freemem()); //return integer 421545
console.log(os.getPriority());

console.log(os.homedir()); //return home directory path
console.log(os.hostname()); //return host name
console.log(os.loadavg()); //return array with all elements zero
console.log(os.machine());
console.log(os.platform());