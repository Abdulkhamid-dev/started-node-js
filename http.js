const http = require('http')


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: {
          name: 'anythin',
          id: 46461_886-684,
          userName: 'nicknam'
      }
    }));
})

server.listen(8000, ()=> console.log('Server running loaclhost port: 8000'));