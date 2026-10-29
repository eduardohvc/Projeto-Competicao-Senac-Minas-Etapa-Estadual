const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USUARIO,
  process.env.SENHA,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    logging: false
  }
)

const conexao = () =>{
  try{

    sequelize.authenticate()
    console.log('Conectado ao banco')
    sequelize.sync({
      alter: true
    })

  }catch{
    console.log("Não foi possível se conectar ao banco")
    process.exit(1)
  }
}

module.exports = {conexao, sequelize}