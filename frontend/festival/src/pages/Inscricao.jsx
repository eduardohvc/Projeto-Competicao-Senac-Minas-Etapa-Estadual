import style from "../styles/Corpo.module.css";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";
import { useState } from "react";

function Inscricao() {
  const [id, setId] = useState(0);
  const [participanteID, setParticipanteID] = useState(0);
  const [atividadeID, setAtividadeID] = useState(0);
  const [inscricao, setInscricao] = useState([]);
  const [atividade, setAtividade] = useState([]);
  const [participante, setParticipante] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [lista, setLista] = useState(false);

  const url = import.meta.env.VITE_URL;
  const porta = import.meta.env.VITE_PORTA;

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    let metodo = "POST";
    let dados = { participanteID, atividadeID };
    let mensagem = "Cadastro concluído";
    let rota = `${url}:${porta}/api/inscricao`;

    try {
      const response = await fetch(rota, {
        method: metodo,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const data = await response.json();

      if (response.ok) {
        alert(mensagem);
        setId(0);
        setParticipanteID(0);
        setAtividadeID(0);
        handleConsulta();
      } else {
        alert(data.erro);
        setId(0);
        setParticipanteID(0);
        setAtividadeID(0);
      }

      setCarregando(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  }

  const handleConsulta = async () => {
    let rota = `${url}:${porta}/api/inscricao`;
    const arr = []

    setCarregando(true);
    setLista(!lista);
    setInscricao([]);


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

      setCarregando(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  };

  const handleDelete = async (e) => {
    let rota = `${url}:${porta}/api/inscricao/${e.id}`;

    try {
      const response = await fetch(rota, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Inscrição do participante ${e.participanteID} deletada `);
        handleConsulta();
      } else {
        alert(data.erro);
      }

      setCarregando(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  };

  const todo = async () => {
    const responseAtividade = await fetch(`${url}:${porta}/api/atividade`);

    const responseParticipante = await fetch(
      `${url}:${porta}/api/participante`
    );
    if (carregando) {
      const dataAtividade = await responseAtividade.json();
      setAtividade(dataAtividade.dados);

      const dataParticipante = await responseParticipante.json();
      setParticipante(dataParticipante.dados);
      setCarregando(false);
    }
  };

  todo();

  return (
    <section className={style.secCorpo}>
      <h2>Inscricao</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="participante">Participante</label>
        </p>
        <select
          id="participante"
          required
          onChange={(e) => setParticipanteID(e.target.value)}
          value={participanteID}
        >
          <option value="-1">Selecione um Participante</option>
          {participante.map((e) => (
            <option value={e.id} key={e.id}>
              {e.email}
            </option>
          ))}
        </select>
        <p>
          <label htmlFor="atividade">Atividade</label>
        </p>
        <select
          id="atividade"
          required
          onChange={(e) => setAtividadeID(e.target.value)}
          value={atividadeID}
        >
          <option value="-1">Selecione uma Atividade</option>
          {atividade.map((e) => (
            <option value={e.id} key={e.id}>
              {e.titulo}
            </option>
          ))}
        </select>
        <div>
          <button>Cadastrar</button>
          <button type="button" onClick={handleConsulta}>
            Listar
          </button>
        </div>
      </form>
      <table border={1} style={{ display: lista ? "table" : "none" }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>
              <img src={deletar} alt="Ícone para deletar componentes" />
            </th>
          </tr>
        </thead>
        <tbody>
        {carregando ? (
            <></>
          ) : (
            inscricao.map((e) => (
              <tr key={e.id}>
                <td>{e.participanteID}</td>
                <td>{e.atividadeID}</td>
                <td>
                  <img
                    src={deletar2}
                    alt="Botão para deletar componentes"
                    onClick={() => handleDelete(e)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Inscricao;
