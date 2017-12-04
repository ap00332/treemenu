import React,  {Component}  from 'react';
import './App.css';
import  TreeComponent from './TreeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
         <TreeComponent name='Ameet' name2='Novice'/>
      </div>
    );
  }
}

export default App;
