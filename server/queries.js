const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
})

const getAllDrivers = (request, response) => {
    pool.query('SELECT * FROM drivers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

const getDriverById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM drivers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

const createDriver = (request, response) => {
    const name_driver = request.body.name_driver
    const name_team = request.body.name_team

    pool.query(
        'INSERT INTO drivers (name_driver, name_team) VALUES ($1, $2)', [name_driver, name_team], (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(201).send(`Driver added with ID: ${results.insertId}`)
    })
}

const updateDriver = (request, response) => {
    const id = parseInt(request.params.id)
    const name_driver = request.body.name_driver
    const name_team = request.body.name_team

    pool.query('UPDATE drivers SET name_driver = $1, name_team = $2 WHERE id = $3', [name_driver, name_team, id], (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).send(`Driver updated with ID: ${results.insertId}`)
    })
}

const deleteDriver = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM drivers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
    getAllDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver,
}