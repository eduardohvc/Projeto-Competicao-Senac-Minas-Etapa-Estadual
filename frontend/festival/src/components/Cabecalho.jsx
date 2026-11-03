import logo from "../assets/logoNova.png";
import { Link } from "react-router-dom";
import style from '../styles/Cabecalho.module.css'

function Cabecalho() {
  return (
    <section className={style.secCabecalho}>
      <div>
        <img src={logo} alt="Logo do festival experiência viva" />
        <h1>
          Experiênica <br /> Viva
        </h1>
      </div>
      <nav>
        <Link to="/">
          <button>Participante</button>
        </Link>
        <Link to="/atividade">
          <button>Atividade</button>
        </Link>
        <Link to="/inscricao">
          <button>Inscrição</button>
        </Link>
      </nav>
    </section>
  );
}

export default Cabecalho;
