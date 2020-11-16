const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-246-87-132.eu-west-1.compute.amazonaws.com',
  database: 'd6g61b7tpa02ks',
  user:'oaylctltjjtwzw',
  password: '7a37fddef6badb0260d2e342beca66e38b598cc6f193190805fef17320187437',
  port: 5432,
  ssl:{rejectUnauthorized:false}
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        response.header("Access-Control-Allow-Origin", "*");
        if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
    
    const id = parseInt(request.params.id)
     response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}