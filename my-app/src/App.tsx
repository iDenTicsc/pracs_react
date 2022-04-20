import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/titulo/Titulo_Funcional';
import Contador from './components/contador';

function App() {
  return (<div className='App'>
    <Title nombre='Michelle' apellido='Mendoza'/>
    <Contador title='iPhone' precio={500}/>
    <Contador title='Xiaomi' precio={300}/>
    <Contador title='Samsung' precio={450}/>
    
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
