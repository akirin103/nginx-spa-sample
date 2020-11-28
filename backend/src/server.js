const express = require('express')
const app = express()

const scheme = process.env.SCHEME || 'http'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  })
})

app.get('/items', (req, res) => {
  res.json({
    items: [
      'London', 'Amsterdam', 'Praha', 'Copenhagen',
    ]
  })
})

app.listen(port, () => console.log(`Server is listening on ${scheme}://${host}:${port}`))
