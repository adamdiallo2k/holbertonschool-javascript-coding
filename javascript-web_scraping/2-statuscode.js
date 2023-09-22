#!/usr/bin/node

const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request to the provided URL
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});

