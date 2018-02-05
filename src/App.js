import React,  {Component}  from 'react';
import './App.css';
import  TreeComponent from './TreeComponent';
import Loader from './Loader';
import TextFieldComponent from './TextFieldComponent';
import TypeAheadComponent from './TypeAheadComponent';

class App extends Component {
 
  render() {
    const TxtFC = Loader(TextFieldComponent);
    return (
      <div className="App">
         <TreeComponent name='Ameet' name2='Novice'/>
         <TxtFC/>
         <TypeAheadComponent text='Hola'/>

      </div>
      

    );
  }
}

export default App;
