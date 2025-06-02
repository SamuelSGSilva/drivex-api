const { DataTypes } = require('sequelize');
const db = require('./db');
const Carro = require('./carro');

const Acessorio = db.define('Acessorio', {
  nome: DataTypes.STRING,

}, {
  timestamps: false
});

Acessorio.belongsTo(Carro, { foreignKey: 'carroId' });
Carro.hasMany(Acessorio, { foreignKey: 'carroId' });

module.exports = Acessorio;
