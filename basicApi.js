const Http = require('http')
const data = require('./studentData');

Http.createServer((req , res) => {
    res.writeHead(201, {'Content-Type': 'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(1000)