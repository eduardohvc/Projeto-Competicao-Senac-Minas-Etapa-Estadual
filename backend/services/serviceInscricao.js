const { Inscricao } = require("../models/Inscricao");
const { Participante } = require("../models/Participante");
const { Atividade } = require("../models/Atividade");

const createInscricao = async ({ participanteID, atividadeID }) => {
  const participante = await Participante.findOne({
    where: {
      id: participanteID,
    },
  });

  const atividade = await Atividade.findOne({
    where: {
      id: atividadeID,
    },
  });

  if (!participante) {
    throw new Error("Participante não encontrado");
  }

  if (!atividade) {
    throw new Error("Atividade não encontrada");
  }

  const jaInscrito = await Inscricao.findOne({
    where: {
      atividadeID: atividadeID,
      participanteID: participanteID,
    },
  });

  if (jaInscrito) {
    throw new Error("Está inscrição já está cadastrada");
  }

  const vagas = await Inscricao.findAll({
    where: {
      atividadeID: atividadeID,
    },
  });

  if (vagas.length >= atividade.quantidade) {
    throw new Error(
      "Não é possível se inscrever pois as vagas desta atividade esgotaram"
    );
  }

  if (!participanteID || !atividadeID) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const inscricao = await Inscricao.create({ participanteID, atividadeID });

  return inscricao;
};

const getInscricao = async () => {
  const inscricao = await Inscricao.findAll();

  if (!inscricao) {
    throw new Error("Nenhum Inscricao encontrado");
  }
  
  return inscricao;
};

const updateInscricao = async (id, { participanteID, atividadeID }) => {
  const inscricao = await Inscricao.findByPk(id);
  
  if (!inscricao) {
    throw new Error("Não foi possível encontrar está Inscrição");
  }

  const participante = await Participante.findOne({
    where: {
      id: participanteID,
    },
  });

  const atividade = await Atividade.findOne({
    where: {
      id: atividadeID,
    },
  });

  if (!participante) {
    throw new Error("Participante não encontrado");
  }

  if (!atividade) {
    throw new Error("Atividade não encontrada");
  }

  if (
    participanteID !== inscricao.participanteID ||
    atividadeID !== inscricao.atividadeID
  ) {
    const jaInscrito = await Inscricao.findOne({
      where: {
        atividadeID: atividadeID,
        participanteID: participanteID,
      },
    });

    if (jaInscrito) {
      throw new Error("Está inscrição já está cadastrada");
    }
  }


  inscricao.update({
    participanteID: participanteID || inscricao.participanteID,
    atividadeID: atividadeID || inscricao.atividadeID,
  });

  return inscricao;
};

const deleteInscricao = async(id) =>{
  const inscricao = await Inscricao.findByPk(id)

  if (!inscricao) {
    throw new Error("Não foi possível encontrar está inscrição");
  }

  inscricao.destroy()

  return inscricao
}

module.exports = {
  createInscricao,
  getInscricao,
  updateInscricao,
  deleteInscricao
};
