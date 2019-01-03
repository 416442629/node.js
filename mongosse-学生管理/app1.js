var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('/.public/'))
app.engine('html', require('express-art-template'))
//app.use(bodyParser.urlencoded({extended:false}))

// app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)
// app.get('/',function(req,res){
 
//   fs.readFile('./db.json', 'utf8', function(err,data){
//   		if(err){
//   		return console.log('duqushibai')
//   		}
//   		var students = JSON.parse(data).students;

//   		res.render('index.html',{
//   			fruits:[
// 			    '苹果',
// 			    '苹果',
// 			    '苹果'
// 			    ],

//   			students:students
//   		})
//   })
 
// })
app.listen(3000,function(){
  console.log(
    'running')
})