const fs = 
require('fs');

function readInputFile() {
    fs.readFile('test.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
    });    
    const fileData = fs.readFileSync('test.txt','utf8');
    return fileData;     
}

var input =readInputFile();

var counter = 0

for(var i = 0; i < String(input).length; i++) {
  if ((String(input).substring(i,13) =='@softwire.com')) { counter = counter + 1 }
}
console.log(counter);
