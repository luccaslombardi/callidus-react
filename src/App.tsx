import callidusLogo from './assets/logo-callidus-sem-calda.svg'
import './App.css'
import './fonts/AltoneTrial-Bold.ttf'


function App() {

  return (
    <div className="App">
      <div>
        <a href="https://www.instagram.com/calliduscomunicacao/" target="_blank">
          <img src={callidusLogo} className="logo react" alt="Callidus Instagram" />
        </a>
      </div>
      <div className="titleContainer">
        <div className="titleDiv">
          <h1>callidus</h1>
          <h3>comunicação</h3>
        </div>

      </div>


      <span>
        Site em Construção
      </span>
      <p className="read-the-docs">
        Clique no logo para saber mais...
      </p>
    </div>
  )
}

export default App
