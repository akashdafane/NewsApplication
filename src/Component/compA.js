import React, { useContext, useEffect, useState } from 'react'
// import { FirstName, LastName } from '../App
import CheckBox from './CheckBox';
// import {Cat} from './mock'

import Axios from 'axios';
const CompA = () => {

  // const [apiData, setApiData] = useState()
  // const [id, setId] = useState()
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  
    useEffect(() => {
      // const a =[]
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log("res",res.data )
        // JSON.parse(console.log("json",res.data))
        // a.push(res.data)
        setList(res.data)
      })
      // console.log(JSON.stringify(Cat))
    
    },[]);

    // console.log(JSON.parse(list))
  // const a = JSON.parse(list)
  // console.log("a",a)

  const handleSelectAll = e => {
    // var { id, checked } = e.target;
    // let temp = "";
    // temp = temp + id;
    // console.log("emp",temp)
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => ""+li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleDelete = (isCheck,id) => {
    console.log('handle',parseInt(isCheck),"id",id)

    var temp1 = parseInt(isCheck)
    console.log("temp1",temp1)
    
    if(temp1 === id ){
      // console.log("yaaaa");
      // setIsCheck('')
      // delete list[0]
      // return temp1
      const newList = list.splice(0,id,0);

      console.log("newList",newList)

    }

    // const newList = list.slice(id-1,id);
    // console.log("de",newList)
  }

  const handleClick = e => {
    var { id, checked } = e.target;
    let temp = "";
    temp = temp + id;
    console.log("temp",temp)
    setIsCheck([...isCheck, temp]);
    console.log("ischeck",isCheck)
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== temp));
    }
  };

    const catalog = list.map(({ id, title }) => {
      let temp = "" + id;
      // console.log("id",id)
      return (
        <>
        <CheckBox
          key={temp}
          type="checkbox"
          title={title}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(temp)}
        />
        {title}
        <button type="button" className="btn btn-primary" onClick={() =>  handleDelete(isCheck,id)}>button</button>
        
        </>
      )
    })

    console.log("isCheck",isCheck);

    // console.log("apidata",a)
   
    // const fname = useContext(FirstName);
    // const lname = useContext(LastName);
    // const CheckBox = (props) =>{
    //   // console.log("props",props.data)
    //   // setId(props.data)
    //   return(
    //     <>
    //     <input className="form-check-input" type="checkbox" ></input>
    //     </>
    //   )
    // }

    // const handleChange = (e) => {
    //   let isChecked = e.target.value
    // }

    // console.log("onclik",id)
    // const handleAllChecked = (event) => {
    //   let handleData = apiData
    //   handleData.forEach(api => api.isChecked = event.target.checked)
    //   setApiData(handleData)
    // }

  //  const handleCheckChieldElement = (v) => {
  //    console.log("event",v)
  //    setId(v)
  //     // let handleChild = apiData
  //     // handleChild.forEach(demo => {
  //     //    if (demo.title === event.target.value)
  //     //       demo.isChecked =  event.target.checked
  //     // })
  //     // setApiData(handleChild)
  //   }

  // const handleDelete = (k) => {
  //   console.log("k",k)
  //   console.log("news",apiData);
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

    // const newList = apiData.slice(k-1,k);
    // console.log("x,",newList)
    // const temp = [{"id":1,"name":"akash","std":"2"},{"id":2,"name":"pavan","std":"3"},{"id":3,"name":"doll","std":"4"}]
    // const temp1 = temp.slice(1,2)
    // console.log("temp",temp1)
    // setApiData(newList)
    
  
    // console.log("a",b)


    // setApiData('')

  // }



  return(
    <div>
      <CheckBox
      type="checkbox"
      // className="custom-control-input"
      title="selectAll"
      id="selectAll"
      handleClick={handleSelectAll}
      isChecked={isCheckAll}
      />
      selectAll
      {catalog} 
    </div>
  )
}

export default CompA