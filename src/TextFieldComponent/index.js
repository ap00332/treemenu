import React ,{PureComponent} from 'react';

export default class TextFieldComponent extends PureComponent {

   constructor(props){
       super(props);
       this.state ={ text : 'hello '+ this.props.text};
   }
   
   componentDidMount(){
       console.log('The TextField component has mounted');

   }

   componentWillUnmount(){
    console.log('The TextField component will be mounted');
   }

   handleChangeListener = (event)=>{
    console.log('The TextField component changed ' + event.target.value);
    this.setState({text : event.target.value});
   }

   render(){
       return(
            <div>
                    <input type='text' value={this.state.text} onChange={this.handleChangeListener}/>
            </div>    
       );
   }

}