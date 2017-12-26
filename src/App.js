import React,  {Component}  from 'react';
import './App.css';
import  TreeComponent from './TreeComponent';
import Loader from './Loader';
import TextFieldComponent from './TextFieldComponent';

class App extends Component {
  constructor(props){
    super(props);
   
  }
  render() {
    const TxtFC = Loader(TextFieldComponent);
    return (
      <div className="App">
         <TreeComponent name='Ameet' name2='Novice'/>
         <TxtFC/>
      </div>
      

    );
  }
}

export default App;
