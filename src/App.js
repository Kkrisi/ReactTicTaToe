import logo from './logo.svg';
import './App.css';
import JatekTer from './components/JatekTer';
import { useState } from 'react';

function App() {

  // a react state - leírja a program állapotát, ha a state-ben megadott változó értéke változik akkor a react frissíti az oldal tartalmát azon a részen, amelyik a változótol függ
  const [lista, setLista] = useState([" "," "," ","X","O"," "," ","X","O",])
  const [lepes, setLepes] = useState(0)
  function katt(adat){

    const slista = [...lista]

    if (lepes % 2 == 0){
      slista[adat] = "X";
    } else {
      slista[adat] = "O";
    }

    console.log(lepes)
    let sv = lepes;
    sv++;
    setLepes(sv);
    console.log(lepes);

    setLista([...slista])

    console.log(lista)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>

    <article>
      <JatekTer lista = {lista} katt={katt}/>

    </article>

    <footer>Kádár Kristóf</footer>

    </div>
  );
}

export default App;
