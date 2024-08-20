const http = require('http')
port = 1245;
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/plain' })

    res.end('Hello Holberton School!');
})

app.listen(port, () => {
    console.log('Server is listening on port 1245');
})

module.exports = app

