import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Participante from './pages/Participante.jsx'
import Atividade from './pages/Atividade.jsx'
import Inscricao from './pages/Inscricao.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <Router>
        <Cabecalho/>
        <Routes>
          <Route path='/' element={<Participante/>} />
          <Route path='/atividade' element={<Atividade/>} />
          <Route path='/inscricao' element={<Inscricao/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
