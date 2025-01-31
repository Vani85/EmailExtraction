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
    console.log("Softwire Counter without regex : " +counter); // count: 301 
}

function withRegex() {
    var input =readInputFile();

    //Softwire emails Expected: 261 match
    var regExMatch = input.match(/((\w)+|((\w)+[.|'|+|_|%|-](\w)+))@softwire.com\s/g); 
    console.log("Softwire Counter with regex : " + regExMatch.length);
}

function usingDictionary() {
    var input =readInputFile();
    // All domains - 1925 match
    var regExMatch = input.match(/((\w)+|((\w)+[.|'|+|_|%|-](\w)+))@(\w)+[.(\w)+]+\s/g);   
    console.log("All domains Counter with regex : " + regExMatch.length); 
    let dictionary = {};
    regExMatch.forEach(element => {

        let domain = element.slice(element.indexOf("@")).trim();
        if(dictionary.hasOwnProperty(domain)) {
            dictionary[domain] =   parseInt(dictionary[domain]) + 1;
        } else {
            dictionary[domain] = 1;
        }       

   });

   for (const key of Object.keys(dictionary)) { 
    console.log(key + ": " + dictionary[key]); 
 };

 
}

withoutRegex();
withRegex();
usingDictionary();

