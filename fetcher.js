const request = require('request');
const fs = require('fs');
const localFilePath = process.argv[3]
const url = process.argv[2]


request(url, (error, response, body) => {

  fs.writeFile(`${localFilePath}`, body, function (error) {
    console.log('statusCode:', response.statusCode);
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ` + process.argv[3])
  }

  )
})

// request('http://www.example.edu/', (error, response, body) => {
//   // console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
// });

