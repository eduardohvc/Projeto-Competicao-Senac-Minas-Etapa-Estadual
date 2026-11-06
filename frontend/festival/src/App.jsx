import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Participante from "./pages/Participante.jsx";
import Atividade from "./pages/atividade.jsx";
import Inscricao from "./pages/Inscricao.jsx";
import Inicio from "./pages/Inicio.jsx";
import Dados from "./pages/Dados.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/participante" element={<Participante />} />
          <Route path="/atividade" element={<Atividade />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/dados" element={<Dados />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
