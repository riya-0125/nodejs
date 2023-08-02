var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write(uc.upperCase(" hello raj"));
    res.end(' ,nice to meet you');
}).listen(9000)