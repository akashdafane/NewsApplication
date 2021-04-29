import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const newsUpdate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [newsData,setNewsData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  // console.log("startDate",startDate.toUTCString())
  // console.log("endDate",endDate.toUTCString())

  // axios.get('http://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=7e64635607db4627b21babf55e24c11c')
  //   .then(res => {
  //     setNewsData(res.data.articles)
  //   },[])

  useEffect(()=>(
    filterData()
  ))

  const filterData = () => {
    var tempDict = [];
    axios.get('http://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=7e64635607db4627b21babf55e24c11c')
    .then(res => {
      console.log("res",res)
      res.data.articles.forEach(element => {
        // console.log("publish time ",(element.publishedAt));
        
        // console.log("publish time ",new Date(element.publishedAt));
        
        // console.log("publish time ",new Date(element.publishedAt).getFullYear());
        // console.log("publish time ",new Date(element.publishedAt).getMonth());
        // console.log("publish time ",new Date(element.publishedAt).getDate());
        var year = new Date(element.publishedAt).getFullYear();
        var month = new Date(element.publishedAt).getMonth();
        var day = new Date(element.publishedAt).getDate();

        var startDateYear = startDate.getFullYear();
        var startDateMonth = startDate.getMonth();
        var startDateDay = startDate.getDate();

        var endDateYear = endDate.getFullYear();
        var endDateMonth = endDate.getMonth();
        var endDateDay = endDate.getDate();

        if(year >= startDateYear && year <= endDateYear) {
          if(month >= startDateMonth && month <= endDateMonth) {
            if(day >= startDateDay && day <= endDateDay) {
              tempDict.push(element);
            }
          }
        }

      });
      setNewsData(tempDict)
    })
  }


  return (
    <div>
    <DatePicker 
      selected={startDate} 
      // selectsStart
      startDate={startDate}
        endDate={endDate}
      onChange={date => setStartDate(date)} 
      />
    <DatePicker 
    selected={endDate} 
    // selectsEnd
    startDate={startDate}
        endDate={endDate}
    onChange={date => setEndDate(date)} 
    />
    {/* <button type="button" className="btn btn-primary" onClick={() => filterData()}>Filter</button> */}
    <input 
    className="form-control" 
    type="text" 
    placeholder="Search here..."
    onChange={(e) => setSearchTerm(e.target.value)} />
     <table className="table table-bordered">
     <thead>
       <tr>
         <th>No</th>
         <th scope="col">Ttile</th>
         <th scope="col">Url</th>
         <th scope="col">Author</th>
         <th scope="col">Content</th>
         <th scope="col">Description</th>
         <th scope="col">urlToImage</th>
         <th scope="col">publishedAt</th>
       </tr>
       </thead>

     {
       newsData && newsData.filter((val) => {
         if(searchTerm == "") {
           return val
         }else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
           return val
         }
       }).map((val,key) => {
         return (
          
             <tbody key={key}>
             <tr>
               <th>{key}</th>
               <td>{val.title}</td>
               <td>{val.url}</td>
                <td>{val.author}</td>
                <td>{val.content}</td>
                <td>{val.description}</td>
                <td>{val.urlToImage}</td>
                <td>{val.publishedAt}</td>
             </tr>
             </tbody>
       
          
         )
       })
    }
    </table>
    </div>

  );
};


export default newsUpdate;