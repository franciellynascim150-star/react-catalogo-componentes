import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'
import Rodape from './components/Rodape'

import './App.css'

function App() {

  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 12
    },

    {
      nome: "Redes de Computadores",
      duracao: "1000 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 8
    },

    {
      nome: "Manutenção de Computadores",
      duracao: "800 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 5
    },

    {
      nome: "Programação Web",
      duracao: "900 horas",
      modalidade: "Online",
      nivel: "Técnico",
      vagas: 15
    },

    {
      nome: "Banco de Dados",
      duracao: "700 horas",
      modalidade: "Online",
      nivel: "Técnico",
      vagas: 0
    },

    {
      nome: "Desenvolvimento Mobile",
      duracao: "1000 horas",
      modalidade: "Híbrida",
      nivel: "Técnico",
      vagas: 10
    }
  ]

  return (
    <>
      <Cabecalho />

      <main>

        <section className="inicio" id="inicio">

          <div>
            <p className="subtitulo">CATÁLOGO DE CURSOS</p>

            <h1>
              Aprenda tecnologia
              <br />
              e desenvolva seu futuro.
            </h1>

            <p className="descricao">
              Conheça nossas opções de cursos e escolha
              a formação que mais combina com você.
            </p>

            <a href="#cursos" className="botao">
              Ver cursos
            </a>
          </div>

          <div className="inicio-imagem">
            <span>💻</span>
          </div>

        </section>


        <section className="cursos" id="cursos">

          <div className="titulo">
            <p className="subtitulo">NOSSOS CURSOS</p>
            <h2>Encontre seu curso</h2>
            <p>
              Confira algumas das formações disponíveis.
            </p>
          </div>

          <div className="lista-cursos">

            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}

          </div>

        </section>


        <section className="destaques" id="destaques">

          <div className="titulo">
            <p className="subtitulo">DIFERENCIAIS</p>
            <h2>Por que estudar tecnologia?</h2>
          </div>

          <div className="lista-destaques">

            <Destaque
              titulo="Aprendizado prático"
              texto="Aprenda através de exercícios e projetos."
            />

            <Destaque
              titulo="Novas oportunidades"
              texto="Conheça diferentes possibilidades profissionais."
            />

            <Destaque
              titulo="Diversas áreas"
              texto="Escolha entre programação, redes e banco de dados."
            />

          </div>

        </section>

      </main>

      <Rodape />

    </>
  )
}

export default App