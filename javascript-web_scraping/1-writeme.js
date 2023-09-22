#!/usr/bin/env node

const fs = require('fs');

// Get the file path and string content from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
        // Print the error object if there's an error
        console.error(err);
        return;
    }
});
