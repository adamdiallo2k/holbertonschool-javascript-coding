#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the provided API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const tasks = JSON.parse(body);
  const completedTasksByUser = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });

  for (const userId in completedTasksByUser) {
    console.log(`${userId}: ${completedTasksByUser[userId]}`);
  }
});
