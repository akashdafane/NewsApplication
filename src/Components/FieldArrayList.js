import React from 'react';
import students from './ApiData';

const FieldArrayList = (props) => {
    
    var data = props.data
    console.log("data",data)
    // console.log("data",data[0].donations.forEach(element => {
    //     console.log("each",element)
    // }))

   

    // var arrA = data && data&& data.filter((student) => student.donations)
    // console.log("arrA",arrA)
    // var arrB = arrA[0].donations

    
    // console.log("b",b)
    // arrA.donations.forEach(element => {
    //     console.log("element",element)
    // });
    
    // data && data && data.donations.forEach(element => {
    //     console.log("s",element)
    // });

    // data.forEach(element => {
    //     element.donations.filter(s=>{
    //         console.log("s",s)
    //     })
    // });
    // console.log("map",sdata)
    // var mdata = sdata.donations.forEach(s => {
    //     console.log(s)
    // })
    // console.log("mdata",mdata)
    // var sdata = data.filter((st) => st.donations == 'institution')
    // console.log("sdata",sdata)

    // var s = data.filter((st) => ?st.donations == 'institution')
    // var s = props.data.map((v,k) => {
    //     console.log("v",v)
    // })
    // console.log("s",s)

//    var s =  arrB.map((v,k) => {
//         console.log("v",v)
//         console.log("k",k)
//         return(
//             <div>
//                 <table>
//                     <tr>
//                         <th>FirstName</th>
//                         <th>Donation Amount</th>
//                         <th>Institution</th>
//                     </tr>
//                 </table>
//             </div>
//         )
//     })

    return(
        <>
    {
       data.length > 0 &&  data.map((dataValue , key)=> {
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
                        <tbody>
                            <tr scope="row">
                                <td>{dataValue.fullName}</td>
                                <td>{dataValue.donationsAmount}</td>
                                <td>{value.institution}</td>
                                <td>{value.percentage}</td>
                                <td><i class="fas fa-edit"></i></td>
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