// import react from 'react';
// import Chart from 'react-google-charts';


// const barChart = () => {
//     return (
//         <div>
//             <Chart
//                 width={'500px'}
//                 height={'300px'}
//                 chartType="Bar"
//                 loader={<div>Loading Chart</div>}
//                 data={[
//                     ['one', 'two'],
//                     ['A', 5],
//                     ['B', 5],
//                     ['C', 1],
//                     ['D', 10]
//                 ]}
//                 options={{
//                     title: 'BarChart'
//                 }}
//             />
//         </div>
//     )
// }

// export default barChart


import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';


const BarChart = () => {
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => {
    //             console.log("res", res)
    //         })
    // })
    const options = {
        title: {
            text: 'Bar Chart'
        },
        chart: {
            type: 'bar'
        },
      
        series: [{
            name: 'Brand',
            data: [{
                name: 'Chrome',
                y: 61.41,
                // sliced: true,
                // selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    }

    return (
        <div>
            {/* <h1>hello</h1>2 */}
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default BarChart
