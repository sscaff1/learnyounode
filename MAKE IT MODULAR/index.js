'use strict';
const readFile = require('./readFile');

readFile(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    console.log(err)
  } else {
    list.forEach(item => console.log(item));
  }
});
