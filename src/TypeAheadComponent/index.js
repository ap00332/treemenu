import React from 'react';

const TypeAheadComponent = ({text}) => {
    
    return (
    <div>
        <input type='text' value={text} />
        <input type = 'submit' value ='Search'/> 
     </div>   
    );
}

export default TypeAheadComponent;
