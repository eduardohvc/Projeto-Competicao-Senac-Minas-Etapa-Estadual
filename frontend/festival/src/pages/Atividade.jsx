import { InputMask } from "@react-input/mask";
import style from "../styles/Corpo.module.css";
import editar from "../assets/editarBranco.png";
import editar2 from "../assets/editarNovo.png";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";
import { useState } from "react";

function Atividade() {
  const [id, setId] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [atividade, setAtividade] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [lista, setLista] = useState(false);
  const [edicao, setEdicao] = useState(false);

  const url = import.meta.env.VITE_URL;
  const porta = import.meta.env.VITE_PORTA;

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    let metodo = "POST";
    let dados = { titulo, descricao, quantidade };
    let mensagem = "Cadastro caoncluído";
    let rota = `${url}:${porta}/api/atividade`;

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
        setTitulo("");
        setDescricao("");
        setQuantidade(0);
        handleConsulta();
      } else {
        alert(data.erro);
        setId(0);
        setTitulo("");
        setDescricao("");
        setQuantidade(0);
      }

      setCarregando(false);
      setEdicao(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  }

  const handleConsulta = async () => {
    let rota = `${url}:${porta}/api/atividade`;

    setCarregando(true);
    setLista(!lista);
    setAtividade([]);

    try {
      const response = await fetch(rota);

      const data = await response.json();

      if (response.ok) {
        setAtividade(data.dados);
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
    setTitulo(e.titulo);
    setDescricao(e.descricao);
    setQuantidade(e.quantidade);
    handleConsulta()
  };

  const handleDelete = async (e) => {
    let rota = `${url}:${porta}/api/atividade/${e.id}`;

    try {
      const response = await fetch(rota, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Atividade ${e.titulo} deletada `);
        handleConsulta();
      } else {
        alert(data.erro);
      }

      setCarregando(false);
    } catch (erro) {
      alert(`Não foi possível fazer a conexão. Erro:${erro}`);
    }
  };

  return (
    <section id="tit" className={style.secCorpo}>
      <h2>Atividade</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label aria-label="Campo de título" htmlFor="titulo">Título</label>
        </p>
        <InputMask
          id="titulo"
          mask={"_".repeat(100)}
          replacement={{ _: /[a-zA-ZÀ-ý\s\-]/ }}
          required
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        ></InputMask>
        <p>
          <label aria-label="Campo de quantidade" htmlFor="quantidade">Quantidade</label>
        </p>
        <input
          type="number"
          id="quantidade"
          required
          onChange={(e) => setQuantidade(e.target.value)}
          value={quantidade}
        />
        <p>
          <label aria-label="Campo de descricao" htmlFor="descricao">Descrição</label>
        </p>
        <textarea
          id="descricao"
          cols="30"
          rows="5"
          required
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
        ></textarea>
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
            <th>Título</th>
            <th>Vagas</th>
            <th className={style.tableMenu}>Descrição</th>
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
            atividade.map((e) => (
              <tr key={e.id}>
                <td>{e.titulo}</td>
                <td>{e.quantidade}</td>
                <td className={style.tableMenu}>{e.descricao}</td>
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

export default Atividade;
