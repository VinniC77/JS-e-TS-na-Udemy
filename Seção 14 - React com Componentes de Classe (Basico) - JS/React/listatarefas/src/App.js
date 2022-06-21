import React from "react"; // Precisamos importar o React, pois, vamos escrever o códiugo em JSX.
import './App.css';
import Main from './components/Main';

// Vamos fazer um componente sem estado que é uma função normal e retorna um componente JSX
export default function App() {
  return <Main />
}
