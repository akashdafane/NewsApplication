import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
// import {Bar} from 'react-chartjs-2';
import axios from 'axios'

const PieChart = () => {
    const [api, setApi] = useState()
    // const demoArray = ['one',1,'two',2,'three',3,'four',4,'five',5]
    // console.log("objects",Object.values([demoArray]))

    // const arr = [];
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            setApi(res)
        })
    },[])


    

    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['one','two'],
                    ['one',1],
                    ['two',2]
                    // [Object.values(demoArray)]
                ]}
                
                options={{
                    title: 'PieChart',
                    is3D:"true"
                }}
                // rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}


export default PieChart