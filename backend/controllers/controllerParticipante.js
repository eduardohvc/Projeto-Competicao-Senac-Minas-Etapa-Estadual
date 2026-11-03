const service = require("../services/serviceParticipante.js");

exports.createParticipante = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const participante = await service.createParticipante({
      nome,
      email,
      telefone,
    });

    res.status(201).json({
      sucesso: true,
      dados: participante,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
};

exports.getParticipante = async (req, res) => {
  try {
    const participante = await service.getParticipante()

    res.status(200).json({
      sucesso: true,
      dados: participante,
    });

  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
};

exports.updateParticipante = async(req, res) =>{
  try{
    const participante = await service.updateParticipante(req.params.id, req.body)

    res.status(200).json({
      sucesso: true,
      dados: participante,
    });

  }catch(erro){
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
}

exports.deleteParticipante = async(req, res) =>{
  try{
    const participante = await service.deleteParticipante(req.params.id)

    res.status(200).json({
      sucesso: true,
      dados: participante,
    });

  }catch(erro){
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
}
