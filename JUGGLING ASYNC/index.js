'use strict';
const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2, process.argv.length);

// Make a promise
const getUrl = (url) => new Promise((resolve, reject) => {
  http.get(url, res => {
    res.pipe(bl((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.toString());
    }));
  });
});

getUrl(urls[0])
.then(data => {
  console.log(data);
  return getUrl(urls[1]);
})
.then(data => {
  console.log(data);
  return getUrl(urls[2]);
})
.then(data => {
  console.log(data);
})
.catch(err => console.log(err));
