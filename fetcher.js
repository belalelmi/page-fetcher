const request = require('request');
const fs = require('fs');
const localFilePath = process.argv[3]
const url = process.argv[2]


request(url, (error, response, body) => {

  fs.writeFile(`${localFilePath}`, body, function (error) {
    if (error) {
      console.log('Whoops:' + error)
    } else {
      console.log('statusCode:', response.statusCode);
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ` + process.argv[3]);
    }
  }
  )
});
