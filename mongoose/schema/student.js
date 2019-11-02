const mongoose = require('mongoose')

// Schema属性是一个构造函数
const Schema = mongoose.Schema
// 创建一个Schema实例，传入具体的规则参数
const studentSchema = new Schema({
  stu_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  age: {
    type: Number
  }
})
// 创建模型对象，利用model方法。参数一是数据库名字，参数二是schema
const studentModel = mongoose.model('students', studentSchema)

module.exports = studentModel

// studentModel.create({
//   stu_id: '0321',
//   name: '李佳美',
//   age: 29
// }, (err, data) => {
//   if (err) {
//     // throw new Error(err)
//     console.log(err)
//   }
//   console.log(data)
// })