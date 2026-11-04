import {useState} from 'react'

function Dados(){
  const [atividade, setAtividade] = useState([])
  const [carregandoA, setCarregandoA] = useState(true)

  const [participante, setParticipante] = useState([])
  const [carregandoP, setCarregandoP] = useState(true)

  const [inscricao, setInscricao] = useState([])
  const [carregandoI, setCarregandoI] = useState(true)

  const url = import.meta.env.VITE_URL;
  const porta = import.meta.env.VITE_PORTA;

  const handleConsultaA = async () => {
    let rota = `${url}:${porta}/api/atividade`;

    if(carregandoA){

    setCarregandoA(false);

    try {
      const response = await fetch(rota);

      const data = await response.json();

      if (response.ok) {
        setAtividade(data.dados);
      } else {
        alert(data.erro);
      }

    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro.message}`);
    }}
  };

  const handleConsultaP = async () => {
    let rota = `${url}:${porta}/api/participante`;

    if(carregandoP){
    setCarregandoP(false);

    try {
      const response = await fetch(rota);

      const data = await response.json();

      if (response.ok) {
        setParticipante(data.dados);
      } else {
        alert(data.erro);
      }

    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro.message}`);
    }}
  };

  const handleConsultaI = async () => {
    let rota = `${url}:${porta}/api/inscricao`;
    
    if(carregandoI && atividade.length > 0 && participante.length > 0){
    setCarregandoI(false);
    
    const arr = []

    try {
      const response = await fetch(rota);

      const data = await response.json();

      data.dados.map((i) =>{
        const a = atividade.find((e) => e.id == i.atividadeID)
        const p = participante.find((e) => e.id == i.participanteID )

        const insc = {
          participanteID: p.email,
          atividadeID: a.titulo,
          id: i.id
        }

        arr.push(insc)
      })

      if (response.ok) {
        setInscricao(arr);
      } else {
        alert(data.erro);
      }

    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro.message}`);
    }}
  };

  handleConsultaA()
  handleConsultaI()
  handleConsultaP()

  return(
    <section>
      <h2>Dados</h2>

      <h3>Participantes</h3>
      <table border={1} >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {carregandoP ? (
            <></>
          ) : (
            participante.map((e) => (
              <tr key={e.id}>
                <td>{e.nome}</td>
                <td>{e.email}</td>
                <td>{e.telefone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h3>Atividade</h3>
      <table border={1} >
        <thead>
          <tr>
            <th>Título</th>
            <th>Quantidade</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {carregandoA ? (
            <></>
          ) : (
            atividade.map((e) => (
              <tr key={e.id}>
                <td>{e.titulo}</td>
                <td>{e.quantidade}</td>
                <td>{e.descricao}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h3>Inscrições</h3>
      <table border={1} >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {carregandoI ? (
            <></>
          ) : (
            inscricao.map((e) => (
              <tr key={e.id}>
                <td>{e.participanteID}</td>
                <td>{e.atividadeID}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  )
}

export default Dados