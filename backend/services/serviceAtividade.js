const { Atividade } = require('../models/Atividade')

const createAtividade = async({titulo, descricao, quantidade}) =>{

  if(quantidade <= 0){
    throw new Error('A quantidade de vagas precisa ser maior de 0')
  }

  if(!titulo || !descricao || !quantidade){
    throw new Error('Preencha todos os campos corretamente')
  }

  const atividade = await Atividade.create({titulo, descricao, quantidade})

  return atividade
}

module.exports ={
  createAtividade
}