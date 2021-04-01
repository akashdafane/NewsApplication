import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';



const FieldArrayList = (props) => {

    const FieldArrayData = useSelector((state) => state.fieldArrayReducer.fieldArray)

    console.log("field",FieldArrayData)

    const [isEditing, setIsEditing] = useState(false)
    const [ name, setName] = useState('')

    

//     const toggleEditing = () => {
//         console.log("click",isEditing)
//         setIsEditing(!isEditing)
        
//     }

//     console.log("props",name)

//    const editHandler = (event) => {
//     event.preventDefault();
//    } 
   
    return(
        <>
  
    {
       FieldArrayData > 0 &&  FieldArrayData.map((dataValue , key)=> {
           console.log("dataValue",dataValue)
           return(
               <>
               <tabel className="table">
                   <tr>
                       <th scope="col">fullname</th>
                       <th scope="col">Doantion</th>
                       <th scope="col">Institutuion</th>
                       <th scope="col">Percentage</th>
                       {/* <th scope="col">Edit</th> */}
                   </tr>
               {
                   dataValue.donations.map((value , key)=> {
                       console.log("value")
                    return(
                        <>
                        {/* {isEditing && (
                        <div>
                             <form onSubmit={editHandler}>
                                 <input type="text" defaultValue={dataValue.fullName}/>
                                 <button type="submit" >Save</button>
                                 <button type="button" onClick={toggleEditing}>Cancel</button>
                             </form>
                            </div>
                        )} */}
                        <tbody>
                            <tr scope="row">
                                <td>{dataValue.fullName}</td>
                                <td>{dataValue.donationsAmount}</td>
                                <td>{value.institution}</td>
                                <td>{value.percentage}</td>
                                {/* <td><i class="fas fa-edit" onClick={toggleEditing}></i></td> */}
                            </tr>
                        </tbody>
                        </>
                    )
                 })
               }
               </tabel>
               </>
           ) 
         })
    }    
        </>
    )
}


export default FieldArrayList;