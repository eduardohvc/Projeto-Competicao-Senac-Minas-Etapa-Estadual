import { InputMask } from "@react-input/mask";
import style from "../styles/Corpo.module.css";
import editar from "../assets/editarBranco.png";
import editar2 from "../assets/editarNovo.png";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";
import { useState } from "react";

function Participante() {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [participante, setParticipante] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [lista, setLista] = useState(false);
  const [edicao, setEdicao] = useState(false);

  const url = import.meta.env.VITE_URL;
  const porta = import.meta.env.VITE_PORTA;

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    let metodo = "POST";
    let dados = { nome, email, telefone };
    let mensagem = "Cadastro caoncluído";
    let rota = `${url}:${porta}/api/participante`;

    if (edicao) {
      metodo = "PUT";
      dados = { ...dados, id };
      mensagem = "Atualizado com sucesso";
      rota += `/${id}`;
    }

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
        setNome("");
        setEmail("");
        setTelefone("");
        handleConsulta();
      } else {
        alert(data.erro);
        setId(0);
        setNome("");
        setEmail("");
        setTelefone("");
      }

      setCarregando(false);
      setEdicao(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  }

  const handleConsulta = async () => {
    let rota = `${url}:${porta}/api/participante`;

    setCarregando(true);
    setLista(!lista);
    setParticipante([]);

    try {
      const response = await fetch(rota);

      const data = await response.json();

      if (response.ok) {
        setParticipante(data.dados);
      } else {
        alert(data.erro);
      }

      setCarregando(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  };

  const atualiza = async (e) => {
    setEdicao(true);
    setId(e.id);
    setNome(e.nome);
    setEmail(e.email);
    setTelefone(e.telefone);
    handleConsulta()
  };

  const handleDelete = async(e) => {
    let rota = `${url}:${porta}/api/participante/${e.id}`;

    try {

      const response = await fetch(rota,{
        method: 'DELETE'
      })

      const data = await response.json()

      if(response.ok){
        alert(`Participante ${e.nome} deletado `)
        handleConsulta()
      }else{
        alert(data.erro)
      }

      setCarregando(false)
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  };

  return (
    <section id="tit" className={style.secCorpo}>
      <h2>Participante</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="nome">Nome</label>
        </p>
        <InputMask
          id="nome"
          mask={"_".repeat(100)}
          replacement={{ _: /[a-zA-ZÀ-ý\s\-]/ }}
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        ></InputMask>
        <p>
          <label htmlFor="email">Email</label>
        </p>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>
          <label htmlFor="telefone">Telefone</label>
        </p>
        <InputMask
          id="telefone"
          mask={"(__) _____-____"}
          replacement={{ _: /\d/ }}
          required
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        ></InputMask>
        <div>
          {edicao ? <button>Editar</button> : <button>Cadastrar</button>}
          <button type="button" onClick={handleConsulta}>
            Listar
          </button>
        </div>
      </form>
      <table border={1} style={{ display: lista ? "table" : "none" }}>
        <thead>
          <tr>
            <th className={style.tableMenu}>Nome</th>
            <th>Email</th>
            <th className={style.tableMenu}>Telefone</th>
            <th>
              <img src={editar} alt="Ícone para editar componentes" />
            </th>
            <th>
              <img src={deletar} alt="Ícone para deletar componentes" />
            </th>
          </tr>
        </thead>
        <tbody>
          {carregando ? (
            <></>
          ) : (
            participante.map((e) => (
              <tr key={e.id}>
                <td className={style.tableMenu}>{e.nome}</td>
                <td>{e.email}</td>
                <td className={style.tableMenu}>{e.telefone}</td>
                <td>
                  <a href="#tit">
                    <img
                      src={editar2}
                      alt="Botão para editar componentes"
                      onClick={() => atualiza(e)}
                    />
                  </a>
                </td>
                <td>
                  <img src={deletar2} alt="Botão para deletar componentes" onClick={() => handleDelete(e)}/>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Participante;
