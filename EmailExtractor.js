const fs = require('fs');

function readInputFile() {
    var data;
    fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    //console.log(data.toString());
    });
     return data;
}

var input =readInputFile();

var counter = 0

for(var i = 0; i < String(input).length; i++) {
  if ((String(input).substring(i,13) =='@softwire.com')) { counter = counter + 1 }
}
console.log(counter);
