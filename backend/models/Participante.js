const { sequelize } = require('../config/database')
const { DataTypes } = require('sequelize')

const Participante = sequelize.define('Participante', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'unique_email',
    validate: {isEmail: true}
  },
  telefone:{
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  timestamps: false
}
)

module.exports = { Participante }