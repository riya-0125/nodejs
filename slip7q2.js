var express=require('express')
var app=express()
var url="mongodb://127.0.0.1:27017";
var mongodb=require('mongodb')
var MongoClient=mongodb.MongoClient

app.listen(3000)
async function connect()
{
    var db=await MongoClient.connect(url)
    return db.db('Company');
}
app.get('/',async function(req,res)
{
    var dbo=await connect()
    var values={
        'compname':'tcs',
        'product' :'softwares'
    }
    var values1={
        'location':'pune'
    }
    var data=await dbo.collection('product').insertOne(values)
    var data1=await dbo.collection('service').insertOne(values1)
    var values2={
        'compname':'tcs'
    }
    var data2=await dbo.collection('product').find(values2).toArray()
      res.send(data2)

})