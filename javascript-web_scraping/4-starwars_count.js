#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  
  const films = JSON.parse(body).results;
  let count = 0;

  films.forEach(film => {
    if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      count++;
    }
  });

  console.log(count);
});
