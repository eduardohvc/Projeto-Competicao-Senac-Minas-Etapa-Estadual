import style from "../styles/Corpo.module.css";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";

function Inscricao(){
  return(
    <section className={style.secCorpo}>
      <h2>Inscricao</h2>
      <form>
        <p>
          <label htmlFor="participante">Participante</label>
        </p>
        <select  id="participante" required>
          <option value="-1">Selecione um Participante</option>
        </select>
        <p>
          <label htmlFor="atividade">Atividade</label>
        </p>
        <select  id="atividade" required>
          <option value="-1">Selecione uma Atividade</option>
        </select>
        <div>
          <button>Cadastrar</button>
          <button>Listar</button>
        </div>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>
              <img src={deletar} alt="Ícone para deletar componentes" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Telefone</td>
            <td>
              <img src={deletar2} alt="Botão para deletar componentes" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Inscricao