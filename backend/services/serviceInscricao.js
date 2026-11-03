const { Inscricao } = require("../models/Inscricao");
const { Participante } = require("../models/Participante")
const { Atividade } = require("../models/Atividade")

const createInscricao = async ({ participanteID, atividadeID }) => {

  const participante = await Participante.findOne({
    where:{
      id: participanteID
    }
  })

  const atividade = await Atividade.findOne({
    where:{
      id: atividadeID
    }
  })

  if(!participante){
    throw new Error('Participante não encontrado')
  }

  if(!atividade){
    throw new Error('Atividade não encontrada')
  }

  const jaInscrito = await Inscricao.findOne({
    where:{
      atividadeID: atividadeID,
      participanteID: participanteID
    }
  })

  if(jaInscrito){
    throw new Error('Está inscrição já está cadastrada')
  }

  const vagas = await Inscricao.findAll({
    where:{
      atividadeID: atividadeID
    }
  })

  if(vagas.length >= atividade.quantidade){
    throw new Error('Não é possível se inscrever pois as vagas desta atividade esgotaram')
  }
 
  if (!participanteID || !atividadeID) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const inscricao = await Inscricao.create({ participanteID, atividadeID });

  return inscricao;
};

// const getInscricao = async () => {
//   const Inscricao = await Inscricao.findAll();

//   if (!Inscricao) {
//     throw new Error("Nenhum Inscricao encontrado");
//   }

//   return Inscricao;
// };

// const updateInscricao = async (id, { participanteID, atividadeID, telefone }) => {
//   const Inscricao = await Inscricao.findByPk(id);

//   if (atividadeID !== Inscricao.atividadeID) {
//     const atividadeIDRep = await Inscricao.findOne({
//       where: {
//         atividadeID: atividadeID,
//       },
//     });

//     if (atividadeIDRep) {
//       throw new Error("Este atividadeID já está cadastrado");
//     }
//   }

//   if (String(telefone).trim().length !== 11) {
//     throw new Error("Seu telefone precisa ter 11 números. Ex: 00 00000 0000");
//   }

//   if (!Inscricao) {
//     throw new Error("Não foi possível encontrar está Inscricao");
//   }

//   Inscricao.update({
//     participanteID: participanteID || Inscricao.participanteID,
//     atividadeID: atividadeID || Inscricao.atividadeID,
//     telefone: telefone || Inscricao.telefone,
//   });

//   return Inscricao;
// };

// const deleteInscricao = async(id) =>{
//   const Inscricao = await Inscricao.findByPk(id)

//   if (!Inscricao) {
//     throw new Error("Não foi possível encontrar está Inscricao");
//   }

//   Inscricao.destroy()

//   return Inscricao
// }

module.exports = {
  createInscricao,
  // getInscricao,
  // updateInscricao,
  // deleteInscricao
};
