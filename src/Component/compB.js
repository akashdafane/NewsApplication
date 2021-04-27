import React from 'react'
import { useSelector } from 'react-redux';




const CompB = () => {

const Data = useSelector((state) => state.nameReducer.name)
return(
  <div>
    {/* <h1>CompB</h1> */}
    <h1>{Data.firstName}</h1>
    </div>
  )
}

export default CompB;
