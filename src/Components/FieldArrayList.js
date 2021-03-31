import React, {useState} from 'react';

const FieldArrayList = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [ name, setName] = useState('')

    const toggleEditing = () => {
        console.log("click",isEditing)
        setIsEditing(!isEditing)
        
    }
    console.log("props",name)

   const editHandler = (event) => {
    event.preventDefault();
   } 
   
    return(
        <>
    
    {
       props.data.length > 0 &&  props.data.map((dataValue , key)=> {
           return(
               <>
               <tabel className="table">
                   <tr>
                       <th scope="col">fullname</th>
                       <th scope="col">Doantion</th>
                       <th scope="col">Institutuion</th>
                       <th scope="col">Percentage</th>
                       <th scope="col">Edit</th>
                   </tr>
               {
                   dataValue.donations.map((value , key)=> {
                       
                    return(
                        <>
                        {isEditing && (
                        <div>
                             <form onSubmit={editHandler}>
                                 <input type="text" defaultValue={dataValue.fullName}/>
                                 <button type="submit" >Save</button>
                                 <button type="button" onClick={toggleEditing}>Cancel</button>
                             </form>
                            </div>
                        )}
                        <tbody>
                            <tr scope="row">
                                <td>{dataValue.fullName}</td>
                                <td>{dataValue.donationsAmount}</td>
                                <td>{value.institution}</td>
                                <td>{value.percentage}</td>
                                <td><i class="fas fa-edit" onClick={toggleEditing}></i></td>
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
        
           {/* {s} */}
       {/* {
        data.map((v,k) => {
             console.log("v",v)
             console.log("k",k)
             return(
                 <div>
                     <tr>
                         <th>FirstName</th>
                         <th>donationsAmount</th>
                     </tr>
                      <tbody>
                <tr>{v.fullName}</tr>
                <tr>{v.donationsAmount}</tr>
                <tr>{v.donations}</tr>
            </tbody>
                  
                 </div>
             )
         })
       }
         */}
   
       {/* {
            arrA && arrA && arrA.map((v,k) =>  {
                return(
                    <div>
                        <li>{v.donations}</li>
                    </div>
                )
               
            })
       } */}
       {/* {arrB[0]} */}
      
        </>
    )
}


export default FieldArrayList;