const fs = require('fs')

function requestHandler(req, res) {
            //console.log(req.url, req.headers,req.method)
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {

            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message)

        })
        res.writeHead(302, { 'location': '/' })
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Howdy by node server</h1></body>')
    res.write('</html>')
    res.end()
}
module.exports = requestHandler
