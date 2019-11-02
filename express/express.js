// express框架搭建服务器
const express = require('express')
// 引入数据库连接 => 不要在操作数据库时，每次都去连接数据库，否则会造成数据库罢工。应该在初始时连接一次。
const db = require('../mongoose/mongoose')
// 引入cors,具体配置方法可见 => https://github.com/expressjs/cors#simple-usage-enable-all-cors-requests
const cors = require('cors')

// schemas
const hitFilmModel = require('../mongoose/schema/hitFilms')

// 创建服务器
const app = express()
app.use(cors())
// 在数据连接成功后，设置路由
db.then(res => {
  if (res === 'success') {
    // 首页
    app.get('/', (req, res) => {
      res.send('index 页面')
    })
    // 获取热播电影
    app.get('/getHitFilms', (req, res) => {
      // get方式
      const cinemaCode = req.query.cinemaCode
      console.log(cinemaCode)
      hitFilmModel.find({ }, (err, data) => {
        console.log(data)
        if (err) {
          throw new Error(err)
        } else {
          const obj = {
            status: 'success',
            code: '200',
            data
          }
          res.send(obj)
        }
      })
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


