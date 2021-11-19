
import './App.css';
import Frase from './components/Frase'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Frase texto= "Meu Primeiro Projeto React do Zero" />
        <List />
      </header>
    </div>
  );
}

export default App;
