const fs = 
require('fs');

function readInputFile() {
    const fileData = fs.readFileSync('test.txt','utf8');
    return fileData;     
}

var input =readInputFile();
var counter = 0

//Using legacy code

while(input.length>0)
{
    if ((input.includes('@softwire.com'))) {     
    counter = counter + 1 
    input = input.substring(input.indexOf("@softwire.com") + 13);
    }
    else
    {
        break;
    }
}
console.log("Legacy code: " +counter); // count: 301 

//Code which uses regex
const re = new RegExp("[\w*\.\w*]+@\w*[\.\w*]+");
var regExMatch = [...input.matchAll("\w*\.\w*@softwire.com ")];
regExMatch.forEach((match)=>{
    console.log(match[0]);
})
console.log(regExMatch.length);// Expected: 261 match

