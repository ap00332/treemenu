import React from 'react';

const TypeAheadComponent = ({text}) => {
    this.state = { _text : text};
    const handleTextChange = e => {
        this.setState({_text : e.target.value});
    }

    return (
    <div>
        <input type='text' value={this.state._text} onChange = {handleTextChange}/>
        <input type = 'submit' value ='Search'/> 
     </div>   
    );
}

export default TypeAheadComponent;
