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

// 02. Props
//----------------------------
/* En un sistema debemos procurar evitar desarrollar elementos que dependan entre ellos.
 * Es decir debemos desarrollar elementos independientes entre si, que no exista cohesión entre los
 * elementos que forman el sistema.
 * El desarrollo basado en componentes es especialmente util en estos casos, aqui buscamos que cada componente sea
 * independiente entre si.
 * Cada componente debe buscar ser su propio mundo y no debera usar información externa a el mismo.
 * 
 * Props, en terminos tecnicos las props en REACT son propiedades de creación del componente. Es decir, información que
 * establecemos para un componente cuando lo creamos. Esto es la forma a trabez de lo cual un componente padre pasa información
 * hacia los componentes hijos.
 * 
 * Toda la información que el componente necesita del exterior la tiene que recibir via PROPS.
 * Los PROPS son readonly, es decir, un componente no puede modificar sus propias PROPS, sola las puede leer.
 * Cuando el valor que se pasa via PROPS a un componente, se actualiza o se modifica. El componente se actualiza automaticamente.
 * 
 * Las PROPS es uno de los conceptos fundamentales del trabajo con REACT porque es a travez de ellos que pasamos información de
 * inicialización a nuestros componentes.
 */
let nombre = "Francisco";
function A() {
  return <p>Hola {nombre} Componente A</p>;
}
function B() {
  return <p>Hola {nombre} Componente B</p>;
}
// props en un componente funcional
// En un componente funcional, las props se reciben como el unico argumento de la función
function C(props) {
  return <p>Hola {props.nombre} Componente C</p>;
}
function D(props) {
  return <p>Hola {props.nombre} Componente D</p>;
}
// props en un componente de clases
class Eclass extends Component{
  render() {
    return <p>Hola mundo desde una clase {this.props.nombre}</p>;
  }    
}
//----------FIN 02---------------------------------
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
    let nombreProp = "Prop Francisco";
    return (
      <div>
      <MiComponenteFuncional />
      <MiComponenteDeClase />
      <A />
      <B />
      <C nombre={nombreProp} />
      <D nombre="Props Jherson" />
      <Eclass nombre={nombreProp}/>
    </div>
    );
  }
}

//export default MiComponenteFuncional;
export default App;
