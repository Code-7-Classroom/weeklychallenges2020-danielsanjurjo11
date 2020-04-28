const fs = require('fs');

fs.readFile('planets.txt','utf8', (error, contents) => {
  if (error) {
    return console.error(error);
  }
  console.log(contents);
})