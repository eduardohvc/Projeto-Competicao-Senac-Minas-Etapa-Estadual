const { Atividade } = require('./Atividade')
const { Participante } = require('./Participante')
const { Inscricao } = require('./Inscricao')

Participante.belongsToMany(Atividade,{
  through: Inscricao,
  foreignKey: 'participanteID',
  otherKey: 'atividadeID'
})

Atividade.belongsToMany(Participante,{
  through: Inscricao,
  foreignKey: 'atividadeID',
  otherKey: 'participanteID'
})

Inscricao.belongsTo(Participante,{
  foreignKey: 'participanteID'
})

Inscricao.belongsTo(Atividade,{
  foreignKey: 'atividadeID'
})

Atividade.hasMany(Inscricao,{
  foreignKey: 'atividadeID'
})

Participante.hasMany(Inscricao,{
  foreignKey: 'participanteID'
})

module.exports = { Atividade, Participante, Inscricao }