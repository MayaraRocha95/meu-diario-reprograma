import Header from './Header'
import Titulo from './Titulo'
import Imagem from './Imagem'
import Apresentacao from './Apresentacao'
import Texto from './Texto'
import Gifs from './Gifs'
import Footer from './Footer'
import './App.css'

function App() {
 

  return (
  <> 
  <header>
  <Header>Meu diário na Reprograma</Header>
  </header>
  <nav className="navbar">
    <Imagem image="https://i.picasion.com/pic92/7ed949395b718fa94155b37df4490576.gif" alt="imagem da desenvolvedora do site" />
    <Titulo title="Olá eu sou a Mayara" />
  </nav>  
  <section>
    <Apresentacao>Sou aluna na reprograma, Comecei a estudar programação em casa e me apaixonei , além de ser uma  Geek que ama a tecnologia. Meu objetivo na tecnologia é deixar os códigos com acessibilidade. </Apresentacao>
    <hr/>
  </section>
  <article>
      <Titulo title="4 aprendizados na reprograma" />
    <div className="container">
      < Titulo title="Git" />
      < Gifs image="https://gifs.eco.br/wp-content/uploads/2022/02/animados-gifs-de-gato-assustado-0.gif" alt="gif animado de gatinho"/>
      <Texto>Meu primeiro contato com o <b>Git </b>foi pânico, eu comecei a pensar que  programação não era para mim, então eu entrei na reprograma e entendi, foi como desbloquear uma fase do seu jogo favorito, comecei a praticar e agora consigo fazer  sozinha.</Texto>
    </div>
    <div className="container">
      < Titulo title="HTML" />
      < Gifs image="https://i.pinimg.com/originals/35/84/f7/3584f74ae9cb973bdcd728c349f2aa3f.gif" alt="gif animado de gatinho"/>
      <Texto>Meu primeiro contato com o <b>HTML</b> foi  descobrir como cada site funciona, e percebi que não era tão difícil, foi então que decidi me inscrever na reprograma e eu pensei "Eu consigo fazer isso".</Texto>
    </div>
    <div className="container">
      < Titulo title="CSS" />
      < Gifs image="https://i.gifer.com/9lzE.gif" alt="gif animado de gatinho" />
      <Texto>Meu primeiro contato com o <b>CSS</b> foi um mundo colorido, saber que cada coisa tem o jeito de ser e quando você faz pela primeira vez um site com CSS do modo que você gostaria de ver um site, é deixar sua marca e sua identidade em cada site feito.</Texto>
    </div>
    <div className="container">
      < Titulo title="JavaScript" />
      < Gifs image="https://acegif.com/wp-content/uploads/cat-typing-8.gif" alt="gif animado de gatinho" />
      <Texto>Meu primeiro contato com o <b>JavaScript </b> eu pensei "Posso fazer qualquer coisa com JavaScript", mas foi bem complicado para entrar na minha cabeça, então ainda continuo estudando, confesso que não sinto que sei tanto quanto  HTML e CSS, contudo isso não me desanima, continuo estudando cada vez mais, pois quero poder fazer qualquer coisa com essa linguagem. </Texto>
    </div>
  </article>
  <footer>
  <Footer> Feito com muito carinho por Mayara Rocha | Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App
