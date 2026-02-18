const http = require('http');
const fs = require('fs');

/* const home=fs.readFileSync("./HomePage.html");
const course=fs.readFileSync("./Courses.html");
const Login=fs.readFileSync("./Login.html");
const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.statusCode=200;
        res.end(home);
    }else if(req.url==="/home"){
        res.statusCode=200;
        res.end(home);
    }else if(req.url==="/courses"){
        res.statusCode=200;
        res.end(course);
    }else if(req.url==="/login"){
        res.statusCode=200;
        res.end(Login);
    }else{
        res.statusCode=404;
        res.end("Page Not Found");
    }
}); */
/* const books=fs.readFileSync("./books.json","utf-8");
const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.statusCode=200;
        res.end("Welcome to the Home Page");
    }else if(req.url==="/books"){
        res.statusCode=200;
        fs.readFile('books.json','utf-8',(err,result)=>{
            if(err){
                console.log("Error",err);
            }else{
                const data=JSON.parse(result);
                console.log(data);
                res.end(JSON.stringify(data));
            }
        });
        res.end(books);
    }else{
        res.statusCode=404;
        res.end("Page Not Found");
    }
});

server.listen(9700, () => {
    console.log("Server is running on port 9700");
}); */
fs.readFile('books.json','utf-8',(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        const data=JSON.parse(result);
        console.log(data);
    }
});
