const mongoose = require('mongoose')

// Schema属性是一个构造函数
const Schema = mongoose.Schema
// 创建一个Schema实例，传入具体的规则参数
const activitySchema = new Schema({
}, {
  // 注意，这里需要指明集合的名字,下面那里mongoose.model指明的集合名貌似不好用，具体原因待验证。
  collection: 'activities'
})
// 创建模型对象，利用model方法。参数一是数据库名字，参数二是schema
const activityModel = mongoose.model('activities', activitySchema,)
module.exports = activityModel

