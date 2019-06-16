import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Componente Funcional : Representación de un componente a travez de una función
function MiComponenteFuncional() {
  return <p>Hola Mundo desde una función</p>;
}

// Componente de clase : Representación de un componente a travez de clases.
class MiComponenteDeClase extends Component{
  render() {
    return <p>Hola mundo desde una clase</p>;
  }    
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
      <MiComponenteFuncional />
      <MiComponenteDeClase />
    </div>
    );
  }
}

//export default MiComponenteFuncional;
export default App;
