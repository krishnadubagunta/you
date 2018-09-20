const { createServer } = require('http')
const { parse } = require('url')
const routes = require('./routes')
const next = require('next')
const port = process.env.PORT || 8080

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    console.log(pathname, query)
    pathname === '/api' ? routes(req, rs, query) : app.render(req, res, pathname, query)
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}) 