const { Atividade } = require("../models/Atividade");

const createAtividade = async ({ titulo, descricao, quantidade }) => {
  if (quantidade <= 0) {
    throw new Error("A quantidade de vagas precisa ser maior de 0");
  }

  if (!titulo || !descricao || !quantidade) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const atividade = await Atividade.create({ titulo, descricao, quantidade });

  return atividade;
};

const getAtividade = async () => {
  const atividade = await Atividade.findAll();

  if (!atividade) {
    throw new Error("Nenhuma atividade encontrada");
  }

  return atividade;
};

const updateAtividade = async (id, { titulo, descricao, quantidade }) => {
  const atividade = await Atividade.findByPk(id);

  if (!atividade) {
    throw new Error("Não foi possível encontrar está atividade");
  }

  atividade.update({
    titulo: titulo || atividade.titulo,
    descricao: descricao || atividade.descricao,
    quantidade: quantidade || atividade.quantidade,
  });

  return atividade;
};

const deleteAtividade = async(id) =>{
  const atividade = await Atividade.findByPk(id)

  if (!atividade) {
    throw new Error("Não foi possível encontrar está atividade");
  }

  atividade.destroy()

  return atividade
}

module.exports = {
  createAtividade,
  getAtividade,
  updateAtividade,
  deleteAtividade
};
