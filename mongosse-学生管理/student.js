

var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var studentSchema = new Schema({
  name: {
    type: String,
    required: true // 必须有
  },
  gender: {
    type: Number,
    enum:[0,1]
  },
  age: {
    type:Number,
     min:18,       //年龄最小18
     max:120
  },
  hobbies:{
    type: String
  }
})
//var Student = mongoose.model('Student',studentSchema)


module.exports = mongoose.model('Student',studentSchema)
// exports.save = function (student, callback) {
//   fs.readFile(dbPath, 'utf8', function (err, data) {
//     if (err) {
//       return callback(err)
//     }
//     var students = JSON.parse(data).students

//     // 添加 id ，唯一不重复
//     student.id = students[students.length - 1].id + 1

//     // 把用户传递的对象保存到数组中
//     students.push(student)

//     // 把对象数据转换为字符串
//     var fileData = JSON.stringify({
//       students: students
//     })

//     // 把字符串保存到文件中
//     fs.writeFile(dbPath, fileData, function (err) {
//       if (err) {
//         // 错误就是把错误对象传递给它
//         return callback(err)
//       }
//       // 成功就没错，所以错误对象是 null
//       callback(null)
//     })
//   })
// }
// exports.findByID=function(id,callback){
//   fs.readFile(dbPath, 'utf8', function(err,data) {
//   if(err){
//     return callback(err)
//   }
//   var students = JSON.parse(data).students

//   var ret = students.find(function(item){
//     return parseInt(item.id) === parseInt(id)
//   })
//   callback(null,ret)
//   })
// }
// exports.updateByID = function(student,callback){
//   fs.readFile(dbPath,'utf8',function(err,data){
//     if(err){
//       return callback(err)
//     }
//     var students = JSON.parse(data).students
//     student.id = parseInt(student.id)
//     var stu = students.find(function(item){
//       return item.id === student.id
//     })
//     for(var key in student){
//       stu[key] = student[key]
//     }
//     var fileData = JSON.stringify({
//       students:students
//     })
//     fs.writeFile(dbPath, fileData,  function(err){
//      if(err) { 
//       return callback(err)
//      }
//      callback(null)

//     });

//   })
// }
// exports.deleteByID = function(id,callback){
//   fs.readFile(dbPath, 'utf8', function(err,data) {
//   if(err){
//     return callback(err)
//   }
//   var students = JSON.parse(data).students
//   var deleteID = students.findIndex(function(item){
//       return item.id === parseInt(id)
//     })
//   students.splice(deleteID,1)
//   fileData = JSON.stringify({
//     students:students
//   })
//   fs.writeFile(dbPath, fileData,  function(err){
//      if(err) { 
//       return callback(err)
//      }
//      callback(null)
//    })
//   })
// }