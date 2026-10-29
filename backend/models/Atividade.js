const { sequelize } = require('../config/database')
const { DataTypes } = require('sequelize')

const Atividade = sequelize.define('Atividade', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao:{
    type: DataTypes.STRING,
    allowNull: false
  },
  quantidade:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false
}
)

module.exports = { Atividade }