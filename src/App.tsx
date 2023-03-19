import callidusLogo from './assets/logo-callidus.png'
import './App.css'
import './fonts/AltoneTrial-Bold.ttf'


function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={callidusLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="titleContainer">
        <div className="titleDiv">
          <h1>callidus</h1>
          <h3>comunicação</h3>
        </div>

      </div>


      <span className="read-the-docs">
        Site em Construção
      </span>
      <p className="read-the-docs">
        Clique no Logo da Callidus para saber mais...
      </p>
    </div>
  )
}

export default App
