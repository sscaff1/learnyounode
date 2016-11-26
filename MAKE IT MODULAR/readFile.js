'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
  return fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    const result = [];
    for (let i = 0; i < list.length; i++) {
      if (path.extname(list[i]).substr(1) === ext) {
        result.push(list[i]);
      }
    }
    return callback(null, result);
  })
}
