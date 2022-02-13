//const http = require('http');
const https = require('https');
const fs = require('fs');

//Program which dorwnload a ttl file from github and get the version of that ttl.
//Input: url with the raw file
//Output: version of the ttl file

//Function for downloading the ttl file with the last version
function downloadFile(oldVersion){
    return new Promise((resolve,reject)=>{
        var made = false;
        const file = fs.createWriteStream("oldVersion.ttl");
        const request = https.get(oldVersion, function(response) {
            response.pipe(file);
            //resolve();
        });

        setTimeout(()=>{
            console.log("Hello from inside the testAsync function");
            resolve();
        ;} , 1000
        );
        
    });
}

async function searchVersion(oldVersion){
    await downloadFile(oldVersion);
    var archivo = fs.readFileSync("oldVersion.ttl","utf-8");
    var start = archivo.indexOf("owl:versionInfo");
    var end = archivo.indexOf("\n",start)
    //console.log(archivo);
    console.log(start);
    console.log(end);
    console.log(archivo.substring(start+15,end).replace(/\s+/g, ""));
}

var oldVersion = "https://raw.githubusercontent.com/mariapoveda/wot-ontology/master/ontology/wot.ttl";
searchVersion(oldVersion);
