import logo from "../assets/logoNova.png";
import sanduich from "../assets/sanduichNovo.png";
import { Link } from "react-router-dom";
import style from "../styles/Cabecalho.module.css";
import { useState } from "react";

function Cabecalho() {
  const [menu, setMenu] = useState(true);

  function cliqueMenu() {
    setMenu(!menu);
  }

  function cliqueMenu2() {
    setMenu(false);
  }

  return (
    <>
      <div className={style.divMenu}>
        <img src={logo} alt="Logo do festival experiência viva" />
        <img
          src={sanduich}
          alt="Botão para o menu sanduich"
          onClick={cliqueMenu}
        />
      </div>
      <section className={style.secCabecalho}>
        <div>
          <img src={logo} alt="Logo do festival experiência viva" />
          <h1>
            Experiênica <br /> Viva
          </h1>
        </div>
        <nav>
          <Link to="/">
            <button >Inicio</button>
          </Link>
          <Link to="/participante">
            <button >Participante</button>
          </Link>
          <Link to="/atividade">
            <button >Atividade</button>
          </Link>
          <Link to="/inscricao">
            <button >Inscrição</button>
          </Link>
          <Link to="/dados">
            <button >Dados</button>
          </Link>
        </nav>
      </section>
      <section className={`${style.secMenu} ${menu? style.ativo : ""}`}>
        <div>
          <img src={logo} alt="Logo do festival experiência viva" />
          <h1>
            Experiênica <br /> Viva
          </h1>
        </div>
        <nav>
          <Link to="/">
            <button onClick={cliqueMenu2}>Inicio</button>
          </Link>
          <Link to="/participante">
            <button onClick={cliqueMenu2}>Participante</button>
          </Link>
          <Link to="/atividade">
            <button onClick={cliqueMenu2}>Atividade</button>
          </Link>
          <Link to="/inscricao">
            <button onClick={cliqueMenu2}>Inscrição</button>
          </Link>
          <Link to="/dados">
            <button onClick={cliqueMenu2}>Dados</button>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Cabecalho;
