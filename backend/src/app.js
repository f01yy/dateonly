const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
const port = 8080

app.use(express.json());

app.get('/', (req, res) => {
  res.send(JSON.stringify('Hello World!'))
})

app.get('/api/user', (req, res) => {
  res.json({ id: 1, name: 'Andrew', username: 'rogue' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})