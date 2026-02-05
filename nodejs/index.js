/* const http=require('http');
var express = require('express')
var multer  = require('multer')
var app = express()
var port = 3000;

const myserver=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Home Page");
    }else if(req.url=='/about'){
        res.end("<h1>About Page</h1><img src='https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Mercedes/Mercedes-AMG%20F1%20W17%20E%20PERFORMANCE%20-%20GR%206.webp' height='1000' width='1000' alt='ABES Logo'/>");
    }else if(req.url=='/class'){
        res.end("CE(Computer Engineering)");
    }else{
        res.end("404 Page Not Found");
    }
});
myserver.listen(9200,()=>{
    console.log("Server1 is running on port 9200");
}); */
const fs=require('fs');
/* fs.writeFileSync("./CE.txt","we are students of ABES engineering college"); */
/* const result=fs.readFileSync("./CE.txt","utf-8")
console.log(result);
const hello=fs.readFileSync("./CSE-A.txt","utf-8")
console.log(hello); */
/* fs.readFile("./CSE-A.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
}); */
/* const t = fs.readFileSync("./a.txt", "utf-8");
fs.appendFileSync("./CE.txt",t);
console.log("File written successfully"); */
/* const data=fs.readFile("./CE.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
});
fs.writeFile("./CE-A.txt",data,(err)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("File written successfully");
    }
}); */
/* fs.unlink("./CE.txt",(err)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("File Deleted Successfully");
    }
}); */
fs.appendFile("./CE-A.txt",`Coders of Nice`,(err)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("File Written")
    }
});