import React from 'react';
import TextFieldComponent from '../TextFieldComponent';
const handleOnClick = e => ( console.log(e.target));
const TreeComponent = ({name , name2 } ) => {
  return(
 <div>
    <div onClick={handleOnClick} > Hi {name}</div>
    <div>Hi {name2}</div>
    <TextFieldComponent text={name2}/>
  </div>
 )  
};

export default TreeComponent;