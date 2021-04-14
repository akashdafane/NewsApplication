// import React, { useEffect, useState } from 'react'
// import Chart from 'react-google-charts';
// // import {Bar} from 'react-chartjs-2';
// import axios from 'axios'

// const PieChart = () => {
//     const [api, setApi] = useState()
//     // const demoArray = ['one',1,'two',2,'three',3,'four',4,'five',5]
//     // console.log("objects",Object.values([demoArray]))

//     // const arr = [];
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then(res => {
//             setApi(res)
//         })
//     },[])


    

//     return (
//         <div>
//             <Chart
//                 width={'500px'}
//                 height={'300px'}
//                 chartType="PieChart"
//                 loader={<div>Loading Chart</div>}
//                 data={[
//                     ['one','two'],
//                     ['one',1],
//                     ['two',2]
//                     // [Object.values(demoArray)]
//                 ]}
                
//                 options={{
//                     title: 'PieChart',
//                     is3D:"true"
//                 }}
//                 // rootProps={{ 'data-testid': '1' }}
//             />
//         </div>
//     )
// }


// export default PieChart

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import FullScreenLoader from '../Common/FullScreenLoader'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const PieChart = () => {
  const classes = useStyles();
    const [piedata,setPieData] = useState('');
    const [empAge, setEmpAge] = useState([]);
    const [empSal, setEmpSal] = useState([]);
    const [loading, setLoading] = useState(false)
 
    useEffect(()=>{
        // let empAge = [];
        setLoading(true)
        let empSal = [];
      
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            // setEmpAge(empAge)
            setEmpSal(empSal)
            // empAge.push(parseInt(res.data.data))
            // empSal.push(parseInt(res.data.data))
            // empSal(parseInt(res.data.data))
            for(const Objectof of res.data.data){
                empSal.push(parseInt(Objectof.employee_salary))
                empAge.push(parseInt(Objectof.employee_age))
                // setEmpSal(parseInt(Objectof.employee_salary))
                setEmpAge(parseInt(Objectof.employee_age))
                
            }
            console.log("demo",res.data)
            setLoading(false)
          
        })
        
    },[])
    
    console.log("empSal",empSal)
    console.log("empAge",empAge)

  const options = {
    title: {
      text: 'My chart'
    },
    chart: {
      type: 'pie'
    },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
      name: 'Brand',
      data: empSal
    }]
  }

  return (
    <div > 
      {
        empSal>0&&loading&& <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
            }
  
     </div>
  )
}

export default PieChart