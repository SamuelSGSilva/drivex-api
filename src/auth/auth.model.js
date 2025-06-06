const { DataTypes } = require('sequelize');
const sequelize = require('../models/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

module.exports = User;