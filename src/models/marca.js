const { DataTypes } = require('sequelize');
const db = require('./db');

const Marca = db.define('Marca', {
  nome: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Marca;
