const { DataTypes } = require('sequelize');
const db = require('./db');

const Marca = db.define('Marca', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'unique_marca_nome',
      msg: 'Já existe uma marca com esse nome.'
    }
  },
}, {
  timestamps: false,
});

module.exports = Marca;
