import React, { useContext, useEffect, useState } from 'react'
// import { FirstName, LastName } from '../App
import CheckBox from './CheckBox';
import Axios from 'axios';


const CompB = () => {

  const [apiData, setApiData] = useState()
  const [id, setId] = useState()
  
  

    useEffect(() => {
      // const a =[]
      Axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log("res",res) 
        // a.push(res.data)
        setApiData(res.data)
      })
    },[]);




    // console.log("apidata",a)
   
    // const fname = useContext(FirstName);
    // const lname = useContext(LastName);
    const CheckBox = (props) =>{
      // console.log("props",props.data)
      // setId(props.data)
      return(
        <>
        <input className="form-check-input" type="checkbox" ></input>
        </>
      )
    }

    // const handleChange = (e) => {
    //   let isChecked = e.target.value
    // }

    console.log("onclik",id)
    // const handleAllChecked = (event) => {
    //   let handleData = apiData
    //   handleData.forEach(api => api.isChecked = event.target.checked)
    //   setApiData(handleData)
    // }

  //  const handleCheckChieldElement = (v) => {
  //    console.log("event",v)
  //    setId(v)
  //     // let handleChild = apiData
      // handleChild.forEach(demo => {
      //    if (demo.title === event.target.value)
      //       demo.isChecked =  event.target.checked
      // })
      // setApiData(handleChild)
    // }

  const handleDelete = (k) => {
    console.log("k",k)
    console.log("news",apiData);
    // let newArray = [...apiData]
    // const index = newArray.findIndex((element) => element === k)
    // if(index !== -1) {
    //   newArray.splice(index, 1)
    //   return newArray
    // }

   
    // const list  = [...apiData];
    // const deleteList = list.filter(item => item.id !== k);
    // let a = id
    // const b = a.indexOf(id)
    // delete

    const newList = apiData.splice(k-1,k);
    console.log("x,",newList)

    // setApiData(newList)
    
  
    // console.log("a",b)


    // setApiData('')

  }

  return(
    <div>
      {/* <CompB />  */}
    
      {/* {fname} and {lname} are one organization */}
      {
        apiData&&apiData.map((v,k )=>(
          // console.log("k",k)
          // console.log("v",v)
          // <ul key={k}>
          //   <li> <CheckBox name="checkbox" setId={k}/>{v.title}</li>
          // </ul>
         
          <>
          {/* {
             console.log("k",k),
             console.log("v",v)
           
          } */}
           
          <li key={k}>
          <input
            type="checkbox"
            checked={v.checked }
            onClick={() => setId(k)}
          />
          {v.title}
          <button className="btn btn-primary" onClick={() => handleDelete(k)}>
          Approved
        </button>
        </li>
        </>
        ))
      }
      {/* <h1> Check and Uncheck </h1>
      <input type="checkbox"onClick={handleAllChecked} value="checkall" />Check / Uncheck All
      {
        apiData&&apiData.map((k,v) => {
          // console.log("k",k);
          // console.log("v",v);
          return(<CheckBox onClick={()=> setId(v)}{...k} />)
        })
      } */}

      
     
    </div>
  )
}

export default CompB;
