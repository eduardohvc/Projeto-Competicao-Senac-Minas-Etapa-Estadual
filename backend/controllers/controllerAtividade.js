const service = require("../services/serviceAtividade.js");

exports.createAtividade = async (req, res) => {
  try {
    const { titulo, descricao, quantidade } = req.body;
    const atividade = await service.createAtividade({
      titulo,
      descricao,
      quantidade,
    });

    res.status(201).json({
      sucesso: true,
      dados: atividade,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
};

exports.getAtividade = async (req, res) => {
  try {
    const atividade = await service.getAtividade()

    res.status(200).json({
      sucesso: true,
      dados: atividade,
    });

  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
};

exports.updateAtividade = async(req, res) =>{
  try{
    const atividade = await service.updateAtividade(req.params.id, req.body)

    res.status(200).json({
      sucesso: true,
      dados: atividade,
    });

  }catch(erro){
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
}