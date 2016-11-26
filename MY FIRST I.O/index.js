const fs = require('fs');
const fileRead = fs.readFileSync(process.argv[2]);
console.log(fileRead.toString().split('\n').length - 1);
