const mongoose = require('mongoose')

// Schema属性是一个构造函数
const Schema = mongoose.Schema
// 创建一个Schema实例，传入具体的规则参数
const hitFilmSchema = new Schema({
  cinemaCode: {
    type: String,
  },
  cinemaSystemId: {
    type: String
  },
  id: {
    type: Number
  },
  filmCode: {
    type: String
  },
  filmSystemId: {
    type: String
  },
  name: {
    type: String
  },
  foreignName: {
    type: String
  },
  filmLength: {
    type: Number
  },
  // 影片海报
  poster: {
    type: String
  },
  wordIntroduction: {
    type: String
  },
  summaryClobId: {
    type: Number
  },
  // 制式
  dimensionalList: {
    type: Array
  },
  // 热映还是预售 1热映 2预售
  hitOrPresell: {
    type: String
  },
  // 想看人数
  wantToSee: {
    type: String
  },
  // 导演
  director_str: {
    type: String
  },
  // 演员
  actor_str: {
    type: String
  },
  sort: {
    type: Number
  }
}, {
  // 注意，这里需要指明集合的名字,下面那里mongoose.model指明的集合名貌似不好用，具体原因待验证。
  collection: 'hitFilms'
})
// 创建模型对象，利用model方法。参数一是数据库名字，参数二是schema
const hitFilmModel = mongoose.model('hitFilms', hitFilmSchema,)
console.log('hitFilms集合已准备')
module.exports = hitFilmModel

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