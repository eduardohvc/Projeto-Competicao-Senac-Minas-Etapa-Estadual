import style from '../styles/Corpo.module.css'

function Inicio() {
  return (
    <section className={style.secCorpo}>
      <div className={style.divInicio}>
        <h2>Experiência Viva</h2>
        <h3>Conhecimento, criatividade e experiências que transformam!</h3>
        <p>
          Bem-vindo ao Experiência Viva, um festival criado para conectar
          pessoas, compartilhar conhecimentos e despertar novas possibilidades.
          Um espaço onde a cultura, a inovação, a beleza, a gastronomia e o
          empreendedorismo se encontram para proporcionar momentos únicos de
          aprendizado, troca e inspiração.
        </p>

        <p>
          Aqui, você é convidado a sair da rotina, explorar novos interesses e
          desenvolver habilidades por meio de atividades interativas, oficinas
          práticas, workshops, palestras e rodas de conversa.
        </p>

        <h3>Descubra algumas das atividades do que você pode viver:</h3>
        <ul>
          <li>
            Oficina de Gastronomia Mineira: Técnicas básicas da culinária
            regional.
          </li>
          <li>
            Workshop de Beleza e Estética: Tendências e práticas em cuidados
            pessoais.
          </li>
          <li>
            Palestra de Inovação e Tecnologia: Aplicações da tecnologia na
            experiência do cliente.
          </li>
          <li>Oficina de Barismo: Introdução ao preparo de cafés especiais.</li>
          <li>
            Mesa Redonda de Empreendedorismo: Debate sobre inovação e novos
            negócios.
          </li>
        </ul>

        <p>
          Cada atividade é uma oportunidade de aprender algo novo, conhecer
          pessoas, trocar experiências e transformar ideias em possibilidades
          reais.
        </p>

        <p>
          No Experiência Viva, acreditamos que as melhores experiências são
          aquelas que nos ensinam, nos conectam e nos inspiram a ir além.
        </p>
      </div>
    </section>
  );
}

export default Inicio;
