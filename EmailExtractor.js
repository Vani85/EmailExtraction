const fs = require('fs');

function readInputFile() {
    fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
    });
}

readInputFile();

