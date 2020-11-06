const request = require('request');
const args = process.argv;
const breedName = args[2];


// test Edge Case - error breed not found
// test Edge Case - typo link  (problem with statusCode "undefined" instead of 400)

request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`,(error,response,body) => {
  //console.log('breed not found', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (!error) {
    console.log(data);
  }
});

