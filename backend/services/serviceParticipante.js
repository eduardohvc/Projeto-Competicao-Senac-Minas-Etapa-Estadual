const { Participante } = require("../models/Participante");

const createParticipante = async ({ nome, email, telefone }) => {
  const emailRep = await Participante.findOne({
    where: {
      email: email,
    },
  });

  if (emailRep) {
    throw new Error("Este email já está cadastrado");
  }

  if (String(telefone).trim().length !== 11) {
    throw new Error("Seu telefone precisa ter 11 números. Ex: 00 00000 0000");
  }

  if (!nome || !email || !telefone) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const participante = await Participante.create({ nome, email, telefone });

  return participante;
};

const getParticipante = async () => {
  const participante = await Participante.findAll();

  if (!participante) {
    throw new Error("Nenhum Participante encontrado");
  }

  return participante;
};

const updateParticipante = async (id, { nome, email, telefone }) => {
  const participante = await Participante.findByPk(id);

  if (email !== participante.email) {
    const emailRep = await Participante.findOne({
      where: {
        email: email,
      },
    });

    if (emailRep) {
      throw new Error("Este email já está cadastrado");
    }
  }

  if (String(telefone).trim().length !== 11) {
    throw new Error("Seu telefone precisa ter 11 números. Ex: 00 00000 0000");
  }

  if (!participante) {
    throw new Error("Não foi possível encontrar está Participante");
  }

  participante.update({
    nome: nome || participante.nome,
    email: email || participante.email,
    telefone: telefone || participante.telefone,
  });

  return participante;
};

// const deleteParticipante = async(id) =>{
//   const Participante = await Participante.findByPk(id)

//   if (!Participante) {
//     throw new Error("Não foi possível encontrar está Participante");
//   }

//   Participante.destroy()

//   return Participante
// }

module.exports = {
  createParticipante,
  getParticipante,
  updateParticipante,
  // deleteParticipante
};
