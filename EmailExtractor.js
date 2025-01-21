const fs = require('fs');

function readInputFile() {
    const fileData = fs.readFileSync('test.txt','utf8');
    return fileData;     
}

function withoutRegex() {
    var input =readInputFile();
    var counter = 0

    //Using legacy code

    while(input.length>0){
        if ((input.includes('@softwire.com'))) {     
            counter = counter + 1 
            input = input.substring(input.indexOf("@softwire.com") + 13);
        }
        else       
            break;       
    }
    console.log("Counter without regex : " +counter); // count: 301 
}

function withRegex() {
    var input =readInputFile();

    //Code which uses regex
    var regExMatch = input.match(/((\w)+|((\w)+.(\w)+))@softwire.com\s/g);     
    console.log("Counter with regex : " + regExMatch.length);// Expected: 261 match
}

withoutRegex();
withRegex();

