import React, { useContext, useEffect, useState } from 'react'
import CheckBox from './CheckBox';

import Axios from 'axios';
const CompA = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [data, setData] = useState();
  
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setList(res.data)
      })
    },[]);

  const handleSelectAll = () => {
  
    setIsCheckAll(!isCheckAll );
    setIsCheck(list.map(li => ""+li.id));
    if (isCheckAll ) {
      setIsCheck([]);
    }
  };
  const handleDelete = (isCheck,id, name) => {
  
    console.log("name", name)
    console.log('handle',parseInt(isCheck),"id",id)
    
    if( id ){
      setIsCheck(isCheck.filter(item => item !== id));
      var index = getIndex(list, id);
      const newList = list.splice(index, 1);
      console.log("newList",newList)
  }
}

const getIndex = (data, id) => {
    var output = -1;
    data.forEach(element => {
      if(element.id == id) {
        console.log("Matching")
          output = data.indexOf(element);
      }
    });
    return output;
 }

const handleDeteteAll = (isCheck) => {
      if(isCheckAll === true) {
        var a = [...isCheck]
        a.forEach(id => {
          var index = getIndex(list, id);
          list.splice(index, 1);
        })
        setIsCheck([])
      }
  }

  const handleClick = e => {
    console.log("tsrghet", e.target)
    var { id, checked } = e.target;
    let temp = "";
    temp = temp + id;
    console.log("temp",temp)
    setIsCheck([...isCheck, temp]);
    console.log("botree",isCheck)
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== temp));
    }
  };

    const catalog = list.map(({ id, title }) => {
      let temp = "" + id;
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
        <button type="button" className="btn btn-primary" onClick={() =>  handleDelete(isCheck,id, title)}>Approved</button>
        </>
      )
    })

    console.log("isCheck",isCheck);

  return(
    <div> 
      { isCheck.length > 0 &&( 
        <div>
          <CheckBox
      type="checkbox"
      title="selectAll"
      id="selectAll"
      handleClick={handleSelectAll}
      isChecked={isCheckAll}
      isCheck={isCheck}
      /> 
      selectAll
      <button type="button" className="btn btn-primary" onClick={() => handleDeteteAll(isCheck)}> Approved All</button>
      </div>
      )
      }
       {catalog}
    

    </div>
  )
}

export default CompA