import { InputMask } from "@react-input/mask";
import style from "../styles/Corpo.module.css";
import editar from "../assets/editarBranco.png";
import editar2 from "../assets/editarNovo.png";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";


function Atividade(){
  return(
    <section className={style.secCorpo}>
      <h2>Atividade</h2>
      <form>
        <p>
          <label htmlFor="titulo">Título</label>
        </p>
        <InputMask
          id="titulo"
          mask={"_".repeat(100)}
          replacement={{ _: /[a-zA-ZÀ-ý\s\-]/ }}
          required
        ></InputMask>
        <p>
          <label htmlFor="quantidade">Quantidade</label>
        </p>
        <input type="number" id="quantidade" required />
        <p>
          <label htmlFor="descricao">Descrição</label>
        </p>
        <textarea  id="descricao" cols="30" rows="5" required></textarea>
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
              <img src={editar} alt="Ícone para editar componentes" />
            </th>
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
              <img src={editar2} alt="Botão para editar componentes" />
            </td>
            <td>
              <img src={deletar2} alt="Botão para deletar componentes" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Atividade