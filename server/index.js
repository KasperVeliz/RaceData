const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const app = express()
const port = 3000

const db = require('./queries')

app.use(express.static(path.resolve(__dirname, '../frontend/dist')))

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/', (request, response) => {
	response.sendFile(express.static(path.resolve(__dirname, '../frontend/dist', 'index.html')))
})
app.get('/drivers', db.getAllDrivers)
app.get('/drivers/:id/laps', db.getDriverLapsById)
app.post('/drivers', db.createDriver)
app.put('/drivers/:id', db.updateDriver)
app.delete('/drivers/:id', db.deleteDriver)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})