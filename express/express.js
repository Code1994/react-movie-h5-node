// express框架搭建服务器
const express = require('express')
// 引入数据库连接 => 不要在操作数据库时，每次都去连接数据库，否则会造成数据库罢工。应该在初始时连接一次。
const db = require('../mongoose/mongoose')

// 创建服务器
const app = express()

// 在数据连接成功后，设置路由
db.then(res => {
  if (res === 'success') {
    // 设置路由
    app.get('/', (req, res) => {
      res.send('index 页面')
    })
  }
})


// 端口监听
app.listen(8080, (err) => {
  if (!err) {
    console.log('服务器启动成功了~')
  } else {
    console.log('服务器启动失败了！')
  }
})


