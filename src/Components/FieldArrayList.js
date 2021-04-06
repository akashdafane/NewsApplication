import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const FieldArrayList = (props) => {

    const FieldArrayData = useSelector((state) => state.fieldArrayReducer.fieldArray)

    console.log("field", FieldArrayData)

    // const [isEditing, setIsEditing] = useState(false)
    // const [name, setName] = useState('')


    const toggleEditing = (dataValue, value) => {
        // console.log("click", isEditing)
        // setIsEditing(!isEditing)
        props.history.push('/FieldArr', dataValue, value)
    }

    // const editHandler = (event) => {
    //     event.preventDefault();
    // }

    //     console.log("props",name)

    //    const editHandler = (event) => {
    //     event.preventDefault();
    //    } 

    return (
        <>
            {
                FieldArrayData.length > 0 && FieldArrayData.map((dataValue, key) => {

                    return (
                        <>
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group">
                                        fullName : {dataValue.fullName}<br></br>
                                        Doantion Amount: {dataValue.donationsAmount}<br></br>

                                        {
                                            dataValue.donations.map((value, key) => {

                                                return (
                                                    <>
                                                        Institutuion: {value.institution}<br></br>
                                                        Percentage: {value.percentage}<br></br>
                                                        <i className="fas fa-edit" onClick={() => toggleEditing(dataValue, '')}>Edit</i><br></br>

                                                    </>

                                                )

                                            })
                                        }

                                    </ul>
                                </div>
                            </div>

                        </>
                    )
                })


            }
            <Link to="/FieldArr"><button type="button" className="btn btn-success">FieldArr</button> </Link>

        </>
    )
}


export default FieldArrayList;
