// 原生服务器的搭建方式
// 1.引入http模块(node中的核心模块)
const http = require('http')

// 2.创建server对象
const server = http.createServer((req, res) => {
res.end('<h1>hello world</h1>')
})

// 3.绑定端口监听
server.listen(8080, (err) => {
  if (!err) {
    console.log('服务器启动成功了~')
  } else {
    console.log('服务器启动失败！')
  }
})




















