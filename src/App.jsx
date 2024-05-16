import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './SignIn.tsx'
import Redirect from './redirect.jsx'
import Welcome from "./welcome.jsx"

function App(){
  return(
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/redirect" element={<Redirect/>} />          
        </Routes>
  ) 
}

export default App;






/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//export default App


function Square({value, onSquareClick}) {
  //const [value, setValue] = useState(null);
  return <button onClick={onSquareClick} className="square">{value}</button>;
}



function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Ganador: " + winner;
  }else{
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[7]}onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]}onSquareClick={() => handleClick(8)}/>
        <Square value={squares[6]}onSquareClick={() => handleClick(6)}/>
      </div>
    </>
  );
}

function calculateWinner(squares){
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winLines.length; i++){
    const [a, b, c] = winLines[i];
    if (squares[a] && squares [a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null;
}


function App(){
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");  

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  
  const handlePassChange = (event) =>{
    setPass(event.target.value);
  };

  
  const handleSubmit = (event) =>{
    //console.log(event);
    //console.log("CHECK");
    if(validarInfo()){
      //navegar a pantalla que demuestre mensaje de bienvenida
      
    }
  };

  function validarInfo(){
    if(user.length === 0){
      alert("El username no puede ser vacio")
      return false;
    }
  
    if(pass.length < 6){
      alert("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
  
    return true;
  }

  return (

    <> 
      <div className='contenedor'>
        <h1>Bienvenido</h1>
        <form onSubmit={handleSubmit} >
          <div>
            <input type='text' value={user} onChange={handleUserChange} className='input-field' placeholder='usuario'/>
          </div>
          <div>
            <input type='password' value={pass} onChange={handlePassChange} className='input-field' placeholder='contraseña'/>
          </div>
          <div>
            <button type='submit' className='submit'>Login</button>
          </div>
        </form>
        <div>
          <a href=''>¿Perdiste tu contraseña?</a>
        </div>
        <div>
          <a href=''>¿No tienes Cuenta? Registrate</a>
        </div>
      </div>
      <div>
        <a href=''>Volver</a>
      </div>
    
    </>

)
}

export default App;

*/


