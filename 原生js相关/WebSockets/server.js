const app = require('express')();
const server = require('http').createServer(app);
//基于http 模块生成 服务器实例,方便 http, https 两个版本写法 ,还可以使用express 框架的路径写法
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html')
})


io.on('connection', socket => { 
  console.log('进入')


  socket.on('chat message', msg => { 
    io.emit('chat message',msg)
  })




  socket.on('disconnect', () => { 
    console.log('离开了')
  })
})

server.listen('3000', () => '服务器开启')