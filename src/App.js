
import React, { Component } from "react";
import imagem from './manga.jpg'

class App extends Component {
  state = {
    nome: ['Hélio'],
    idade: 27,
    comida: 'Lasanha',
    músicas: ['Cátia de França - Djaniras', 'Solange - Scales (feat. Kelela)', 'Led zeppelin - Since Ive Been Loving You']
  }
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <ol>{this.state.músicas[0]}</ol>
          <ol>{this.state.músicas[1]}</ol>
          <ol>{this.state.músicas[2]}</ol>
        </ul>
        <img src={imagem} alt='manga'/>
      </div>
    )
  }
}

export default App;
