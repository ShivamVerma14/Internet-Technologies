const http = require('http')
const fs = require('fs')
const mysql = require('mysql')

const port = 10000

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'credentials'
})

con.connect((err) => {
    if (err) throw err

    console.log('Database connected')
})

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(302, {'Location': '/login'})
        res.end()
    }

    else if (req.url === '/login' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile(__dirname + '/html/signin.html', (err, data) => {
            res.end(data)
        })
    }

    else if (req.url === '/signup' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile(__dirname + '/html/signup.html', (err, data) => {
            res.end(data)
        })
    }

    else if (req.url === '/welcome' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile(__dirname + '/html/welcome.html', (err, data) => {
            res.end(data)
        })
    }

    else if (req.url === '/login' && req.method === 'POST') {
        var body = ''

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            var qs = new URLSearchParams(body)
            var email = qs.get('email')
            var password = qs.get('password')

            con.query('SELECT * FROM users WHERE email=? AND password=?', [email, password], (err, result, fields) => {
                if (err) throw err

                if(result.length == 1) {
                    res.writeHead(302, {'Location': '/welcome'})
                    res.end()
                }
                else {
                    res.write('<h1>Sign-in failed</h1>')
                    res.end()
                }
            })
        })
    }

    else if (req.url === '/signup' && req.method === 'POST') {
        var body = ''

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            var qs = new URLSearchParams(body)
            var name = qs.get('name')
            var email = qs.get('email')
            var password = qs.get('password')
            var re_pass = qs.get('re-password')

            if (password !== re_pass) {
                res.write('<h1>Password does not match</h1>')
                res.end()
            }

            con.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
                if (err) throw err

                res.writeHead(302, {'Location': '/'})
                res.end()
            })
        })
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})