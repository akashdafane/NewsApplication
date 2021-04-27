import React from 'react'
import { useSelector } from 'react-redux';


const Index = (props) => {


  console.log("props,",props)

  const data = useSelector((state) => state.nameReducer.name)

  console.log("Index",data)

  const EditData = (data) => {
    console.log("data",data)
    props.history.push('/Home',data)
  }

  return(
    <>
  {/* {props.data} */}
    <h1>  {data.firstName}</h1>
    <i className="fas fa-edit" onClick={() => EditData(data)}>Edit</i><br></br>
    </>
  )
}

export default Index