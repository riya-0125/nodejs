// Write node js program create a User Login System. If username and password is same 
// then throw message is “login successfully” otherwise throw error message “login fail 
// “using then and catch method
var express=require('express')
var app=express()
var bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))
app.listen(9000)

app.get('/',function(req,res){
    res.sendFile(__dirname+'./slip12q1.html')
})
app.post('/',function(req,res){
    var user=req.body.usr;
    var password=req.body.pass;
var login=new Promise((resolve, reject) => {
    if(user=='riya'&&password=='1234')
    resolve('login successfull')
    reject('login failed')
})
login
.then((message)=>{
    res.end(message)
})
.catch((error)=>{
    res.end(error)
})


})