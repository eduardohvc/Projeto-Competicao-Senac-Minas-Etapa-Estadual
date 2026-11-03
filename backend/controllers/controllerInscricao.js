const service = require("../services/serviceInscricao.js");

exports.createInscricao = async (req, res) => {
  try {
    const { participanteID, atividadeID } = req.body;
    const inscricao = await service.createInscricao({
      participanteID,
      atividadeID,
    });

    res.status(201).json({
      sucesso: true,
      dados: inscricao,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro.message,
    });
  }
};

// exports.getInscricao = async (req, res) => {
//   try {
//     const Inscricao = await service.getInscricao()

//     res.status(200).json({
//       sucesso: true,
//       dados: Inscricao,
//     });

//   } catch (erro) {
//     res.status(400).json({
//       sucesso: false,
//       erro: erro.message,
//     });
//   }
// };

// exports.updateInscricao = async(req, res) =>{
//   try{
//     const Inscricao = await service.updateInscricao(req.params.id, req.body)

//     res.status(200).json({
//       sucesso: true,
//       dados: Inscricao,
//     });

//   }catch(erro){
//     res.status(400).json({
//       sucesso: false,
//       erro: erro.message,
//     });
//   }
// }

// exports.deleteInscricao = async(req, res) =>{
//   try{
//     const Inscricao = await service.deleteInscricao(req.params.id)

//     res.status(200).json({
//       sucesso: true,
//       dados: Inscricao,
//     });

//   }catch(erro){
//     res.status(400).json({
//       sucesso: false,
//       erro: erro.message,
//     });
//   }
// }
