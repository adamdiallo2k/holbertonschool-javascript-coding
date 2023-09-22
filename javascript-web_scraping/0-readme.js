#!/usr/bin/env node

const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        // Print the error object if there's an error
        console.error(err);
        return;
    }
    // Print the content of the file
    console.log(data.trim());
});