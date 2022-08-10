const mysql = require('mysql')


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food_db'
})

module.exports = db;