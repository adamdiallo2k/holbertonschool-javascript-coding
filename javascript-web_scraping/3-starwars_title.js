#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
