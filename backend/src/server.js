const express = require('express')
const app = express()

const scheme = process.env.SCHEME || 'http'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

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

app.listen(3000, () => console.log(`Server is listening on ${scheme}://${host}:${port}`))
