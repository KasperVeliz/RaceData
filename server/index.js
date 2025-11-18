const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

const db = require('./queries')

app.use(express.json())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(function(request, response, next){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
})

app.get('/', db.getAllDrivers)
app.get('/drivers/:id', db.getDriverById)
app.post('/drivers/:id', db.createDriver)
app.put('/drivers/:id', db.updateDriver)
app.delete('/drivers/:id', db.updateDriver)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})