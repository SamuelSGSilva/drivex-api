const { DataTypes } = require('sequelize');
const db = require('./db');
const Marca = require('./marca');

const Carro = db.define('Carro', {
  nome: DataTypes.STRING,
  modelo: DataTypes.STRING,
  cor: DataTypes.STRING,
  ano: DataTypes.INTEGER,
}, {
   timestamps: false
});

Carro.belongsTo(Marca, { foreignKey: 'marcaId' });
Marca.hasMany(Carro, { foreignKey: 'marcaId' });



module.exports = Carro;

