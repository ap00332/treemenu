import React from 'react';
import {string} from 'prop-types';
import connect from 'react-redux';

const TypeAheadComponent = ({text}) => {
    
    return (
    <div>
        <input type='text' value={text} />
        <input type = 'submit' value ='Search'/> 
     </div>   
    );
}

TypeAheadComponent.propTypes ={
    text: string.isRequired,
}

TypeAheadComponent.defaultProps = {
    text
}

export default connect(
    state => ({text:state.text+'hello'}),
)( TypeAheadComponent);
