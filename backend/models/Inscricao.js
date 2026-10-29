const { sequelize } = require('../config/database')
const { DataTypes } = require('sequelize')

const Inscricao = sequelize.define('Inscricao', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  participanteID:{
    type: DataTypes.STRING,
    allowNull: false
  },
  atividadeID:{
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: false,
  tableName: 'inscricoes',
  indexes: [
    {
      unique: true,
      fields: ['participanteID', 'atividadeID']
    }
  ]
}
)

module.exports = { Inscricao }