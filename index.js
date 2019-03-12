var express=require('express');
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var app=express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('/login',function(req,res){
	var payload={"data1":"datadata"}
	var token = jwt.sign(payload, 'shhhhh');
	console.log(token)
	var decrypt=jwt.verify(token,'shhhhh');
	console.log(decrypt)
	res.send(token);
})

app.listen(3000, function(){
	console.log('Server started at port 3000');
});
