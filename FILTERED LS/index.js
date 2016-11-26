'use strict';

const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = process.argv[3];
fs.readdir(dir, (err, list) => {
  if (err) {
    console.log(err);
  }
  for (let i = 0; i < list.length; i++) {
    if (path.extname(list[i]).substr(1) === ext) {
      console.log(list[i]);
    }
  }
});
