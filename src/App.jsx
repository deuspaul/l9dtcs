import { add, divide, multiply, subtract } from '@deuspaul/lesson8';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input id="num1" />
        <input id="num2" />
        <button onClick={ ()=> alert(divide(document.getElementById('num1').value, document.getElementById('num2').value))}>multiply</button>
        <button onClick={ ()=> alert(divide(document.getElementById('num1').value, document.getElementById('num2').value))}>divide</button>
        <button onClick={ ()=> alert(subtract(document.getElementById('num1').value, document.getElementById('num2').value))}>subtract</button>
        <button onClick={ ()=> alert(add(document.getElementById('num1').value, document.getElementById('num2').value))}>add</button>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
