import React from 'react';

const CheckBox = ({ id, type, title, handleClick, isChecked, flag }) => {
  // console.log("checkbox",props)
  return (
    <div>
      {/* <li>
      <input 
      key={props.id} 
      onClick={props.handleCheckChieldElement} 
      type="checkbox" 
      checked={props.isChecked} 
      value={props.value} /> 
      {props.title}
      </li> */}
      <input
        id={id}
        title={title}
        type={type}
        onChange={handleClick}
        checked={isChecked}
        flag={flag}
      />
    </div>
  );
};

export default CheckBox;
