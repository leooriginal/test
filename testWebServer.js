var http = require('http')
var fs = require('fs')

const PORT = 8081

fs.readFile('D:\\___code\\test\\index.html', function (err, html) {
  if (err) throw err
  http.createServer(function (request, response) {
    response.writeHeader(200, { 'Content-Type': 'text/html' })
    response.write(html)
    response.end()
  }).listen(PORT)
})
console.log('..srv running')
