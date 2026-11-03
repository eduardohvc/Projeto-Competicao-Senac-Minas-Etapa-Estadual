import { InputMask } from "@react-input/mask";
import style from "../styles/Corpo.module.css";
import editar from "../assets/editarBranco.png";
import editar2 from "../assets/editarNovo.png";
import deletar from "../assets/deletar.png";
import deletar2 from "../assets/deletarNovo.png";

function Participante() {
  return (
    <section className={style.secCorpo}>
      <h2>Participante</h2>
      <form>
        <p>
          <label htmlFor="nome">Nome</label>
        </p>
        <InputMask
          id="nome"
          mask={"_".repeat(100)}
          replacement={{ _: /[a-zA-ZÀ-ý\s\-]/ }}
          required
        ></InputMask>
        <p>
          <label htmlFor="email">Email</label>
        </p>
        <input type="email" id="email" required />
        <p>
          <label htmlFor="telefone">Telefone</label>
        </p>
        <InputMask
          id="telefone"
          mask={"__ _____ ____"}
          replacement={{ _: /\d/ }}
          required
        ></InputMask>
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
  );
}

export default Participante;
