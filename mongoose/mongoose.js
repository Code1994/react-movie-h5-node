const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
// 连接上mongodb上的地址为127.0.0.1：27017的demo数据库
mongoose.connect('mongodb://127.0.0.1:27017/react_h5', { useNewUrlParser: true, useUnifiedTopology: true })


const promise =  new Promise((resolve, reject) => {
  // 监听连接状态
  mongoose.connection.on('open', (err) => {
    if (!err) {
      resolve('success')
    } else {
      reject(err)
    }
  })
})

module.exports = promise

// ;(async() => {
//   const result = await promise
//   if (result === 'success') {
//     console.log('数据库连接成功了~')
//   } else {
//     console.log('数据库连接失败了！')
//   }
// })()





  