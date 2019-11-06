// express框架搭建服务器
const express = require('express')
// 引入数据库连接 => 不要在操作数据库时，每次都去连接数据库，否则会造成数据库罢工。应该在初始时连接一次。
const db = require('../mongoose/mongoose')
// 引入cors,具体配置方法可见 => https://github.com/expressjs/cors#simple-usage-enable-all-cors-requests
const cors = require('cors')
// 引入中间件body-parser, 会将post参数挂载在req.body上
const parser = require('body-parser')
// schemas
const hitFilmModel = require('../mongoose/schema/hitFilms')
const futureFilmModel = require('../mongoose/schema/futureFilms')
const adModel = require('../mongoose/schema/ads')

// 创建服务器
const app = express()
app.use(cors())
app.use(parser.json())
// 在数据连接成功后，设置路由
db.then(res => {
  if (res === 'success') {
    // 首页
    app.get('/', (req, res) => {
      res.send('index 页面')
    })
    // 1.获取热播电影
    app.get('/getHitFilms', (req, res) => {
      // get方式
      const cinemaCode = req.query.cinemaCode
      if (!cinemaCode) {
        res.send('必传的cinemaCode不存在')
      }
      hitFilmModel.find({ cinemaCode }, (err, data) => {
        if (err) {
          throw new Error(err)
        } else {
          const obj = {
            status: 'success',
            code: 200,
            data
          }
          res.send(obj)
        }
      })
    })
    // 2.获取预售电影
    app.get('/getFutureFilms', (req, res) => {
      const cinemaCode = req.query.cinemaCode
      if (!cinemaCode) {
        res.send('必传的cinemaCode不存在')
      }
      futureFilmModel.find({ cinemaCode }, (err, data) => {
        if (err) {
          throw new Error(err)
        } else {
          const obj = {
            status: 'success',
            code: 200,
            data
          }
          res.send(obj)
        }
      })
    })
    // 3.获取广告位
    app.post('/getAds', (req, res) => {
      // console.log(req.body)
      adModel.find({}, (err, data) => {
        if (err) {
          throw new Error(err)
        } else {
          const obj = {
            status: 'success',
            code: 200,
            data
          }
          res.send(obj)
        }
      })
    })
  }
})


// 端口监听
app.listen(3000, (err) => {
  if (!err) {
    console.log('服务器启动成功了~')
  } else {
    console.log('服务器启动失败了！')
  }
})


