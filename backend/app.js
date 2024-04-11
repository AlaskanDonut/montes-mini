import express from 'express'
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hey there.')
})

app.listen(port, () => {
  console.log('listening on port 8080')
})