const http = require('http')

const port = 10000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello world, This is my Node.js server.</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})