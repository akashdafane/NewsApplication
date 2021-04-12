import React from 'react';

// import PieChart from './pieChart'
import {Bar} from 'react-chartjs-2'

const Demo1 = () => {
    const state = {
        labels: ['Validated Articles', 'Open Articles'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: ['#7fcc82', '#80bff2'],
            data: [65, 70],
          },
        ],
      };
    
    return(
        <div>
            {/* // <PieChart chartType={"PieChart"} data={[1,2,3,4]} /> */}
            <Bar 
                data={state}
                options={{
                    title: {
                      display: true,
                      text: '',
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: 'right',
                    },
                  }}
            />
        </div>
    )
}

export default Demo1;