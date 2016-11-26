const http = require('http');
const bl = require('bl');
http.get(process.argv[2], res => {
  res.pipe(bl((err, data) => {
    if (err) {
      console.log(err);
    }
    const stringResponse = data.toString();
    console.log(stringResponse.length);
    console.log(stringResponse);
  }))
})
