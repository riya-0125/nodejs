var http=require('http')
var url=require('url')
var fs=require('fs')
http.createServer(function(req,res){
var q=url.parse(req.url,true);
var filename='.'+q.pathname;
console.log(filename);
fs.readFile(filename,function(err,data){
    if(err){
        res.writeHead(404,{'content-type':'text/html'});
        res.end('404 error');
    }
    else{
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end('file found');
    }
});
}).listen(3400);