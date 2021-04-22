import React from 'react'


const GreetComponent = (props,{name}) => {
  return(
    <>
    <h1>{name}</h1>
    {props.children}
    </>
  )
}

export default GreetComponent;