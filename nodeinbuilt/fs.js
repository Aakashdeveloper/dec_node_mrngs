var fs = require('fs');

//write file (overwrite)
/*
fs.writeFile('mytext.txt','This is nodejs Fs 1111',function(err){
    if(err) throw err;
    console.log("File Created")
})
*/

//append
/*fs.appendFile('mytext.txt','This is nodejs Fs 1111 \n',function(err){
    if(err) throw err;
    console.log("File Created")
})*/

//read file
/*fs.readFile('mytext.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})*/

//rename
/*fs.rename('mytext.txt','myfile.txt',function(err){
    if(err) throw err;
    console.log("File renamed")
})*/

//delete file
fs.unlink('myfile.txt',function(err){
    if(err) throw err;
    console.log('file Deleted')
})