import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Demo1 = () => {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return(
    <div>
      <h1>hello</h1>
      <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    </div>
  )
}

export default Demo1