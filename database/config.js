const { Sequelize } = require('sequelize');

const db = new Sequelize('13SEP', 'powerbi', '@euysa.1', {
  host: '172.18.0.1',
  dialect: 'mssql'
})

module.exports = {
  db
}