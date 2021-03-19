// import { initial } from 'lodash';
// import React, { useEffect, useState } from 'react';
// import Button from './Common/Button';
// import Input from './Common/Input';
// import Axios from 'axios';
// import Autocomplete from '@material-ui/core/TextField'

// const Dbounce = () => {

//     const [search, setSearch] = useState(""); 
//     const [name, setName] = useState("");

//     const handleChange = (event) =>{
//         setName({value: event.target.value});
//     }
//     const options = search.map((option) => {
//         const firstLetter = option.id[0].toUpperCase();
//         return {
//           firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//           ...option,
//         };

//     useEffect=(()=>{
//         handleEvent()
//     },[])

//     const handleEvent = () => {
//         Axios(`https://jsonplaceholder.typicode.com/comments?postId=1`)
//         .then(res => setSearch(res.data))
        
//         // .then(json => setSearch(json.data.items))
//     }

//     console.log("vara",name)
   
//     return(
//         <>
//         {/* <Input type={"text"} className={"form-control"} value={name} onChange={() => handleChange}  placeholder={"Search here..."}/>
//          */}
//           {/* <Input
//         label={"Name"}
//         value={name}
//         // isRequired
//         className="form-control"
//         onChange={(val) => setName(val)}
//         placeholder={"Enter Name"}
//       />
//         {
//            search&&search&& search.length > 0 && 
//             <div className={'autocomplete'}>
//                 {
//                    search&&search&& search?.map((e1,i) =>   
//                     <div key={i} className={'autocomplete'}>
//                         <span>{e1.name}</span>
//                     </div>
//                     )
//                 }
//             </div>
//         } */}

// <Autocomplete
//       id="grouped-demo"
//       options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//       groupBy={(option) => option.firstLetter}
//       getOptionLabel={(option) => option.title}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
//     />
//         <Button type={"button"} className={"btn btn-success"} onClick={handleEvent} label={"Search"}/>
//         </>
//     )
// }

// export default Dbounce


/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios'

export default function Dbounce() {
    const [search,setSearch] = useState("");

  const options = search&&search&&search.map((option) => {
      console.log("options",option)
    const firstLetter = option.title[0].toUpperCase();
    console.log("firstLetter",firstLetter)
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

useEffect(()=> {
    handleEvent()
},[])

      const handleEvent = () => {
        Axios(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => setSearch(res.data))
        
        // .then(json => setSearch(json.data.items))
    }
    console.log("se",search)

  return (
    <Autocomplete
      id="grouped-demo"
      options={options&&options&&options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

