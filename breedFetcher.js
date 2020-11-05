const request = require('request');
const args = process.argv;
const dogName = args[2];


// test Edge Case - error breed not found 
// test Edge Case - type link  (problem with statusCode "undefined" instead of 400)

request(`https://api.thecatapii.com/v1/breeds/search?q=${dogName}`,(error,response,body) => {
  console.log('breed not found', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});

