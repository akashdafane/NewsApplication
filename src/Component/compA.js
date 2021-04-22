import React, { useContext, useEffect, useState } from 'react'
// import { FirstName, LastName } from '../App
import CheckBox from './CheckBox';


import Axios from 'axios';
const CompA = () => {

  const [apiData, setApiData] = useState()
  const [id, setId] = useState()
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  

    useEffect(() => {
      // const a =[]
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log("res",res) 
        // a.push(res.data)
        setList(res.data)
      })
    },[ ]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

    const catalog = list.map(({ id, title }) => {
      return (
        <>
        <CheckBox
          key={id}
          type="checkbox"
          title={title}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {title}
        </>
      )
    })

    // console.log(isCheck);

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