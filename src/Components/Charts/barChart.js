import react from 'react';
import Chart from 'react-google-charts';


const barChart = () => {
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['one', 'two'],
                    ['A', 5],
                    ['B', 5],
                    ['C', 1],
                    ['D', 10]
                ]}
                options={{
                    title: 'BarChart'
                }}
            />
        </div>
    )
}

export default barChart