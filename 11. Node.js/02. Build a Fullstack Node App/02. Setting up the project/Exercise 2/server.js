import http from 'node:http'
import path from 'node:path'

const PORT = 8000

const dirname = import.meta.dirname // server.js's absolute path
//console.log(import.meta.dirname)

const server = http.createServer((req, res) => {
    const pathToresourse = path.join() 
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
