import React, { Component } from 'react';
import Mycars from './Components/Mycars'
import './App.css';

class App extends Component{
  
  state = {
    titre: 'Mon catalogue voiture'
  }
  
  changeTitle = (e) => {
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  changeViaParam = (titre) =>{
    this.setState({
      titre : titre
    })
  }
  render () {
    return (
      <div className="App">

        <Mycars title={this.state.titre} />

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() =>this.changeViaParam('Titre via un parametre')}>via parametre</button>
        
      </div>
    );
  }
}

export default App;
