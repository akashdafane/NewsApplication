import React, { useEffect, useState } from 'react';
import MemoCom from './MemoCom';


const ParentComponent = () => {
    const [name,setName] = useState("")

    useEffect(()=>{
        setInterval(()=>{
            setName({
                name: "botree"
            })
        },2000)
    },[])
    return(
        <>
        <p>Parent Component</p>
        <MemoCom name={name} />
        </>
    )
}

export default ParentComponent;