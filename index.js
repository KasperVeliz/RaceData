const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(request, response, next){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
})

app.get('/', (request, response) => {
  response.send('Hello -server')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})