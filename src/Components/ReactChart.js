import { Grid } from '@material-ui/core';
import React from 'react';
import BarChart from './Charts/barChart';
import PieChart from './Charts/pieChart'
// import { Doughnut } from 'react-chartjs-2';
// import { Chart } from "react-google-charts";

const ReactChart = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid container item xs={6} spacing={3}>
                    <PieChart />
                </Grid>
                <Grid container item xs={6} spacing={3}>
                    <BarChart />
                </Grid>
            </Grid>
            {/* <h1>from Chart</h1> */}


        </>
    )
}

export default ReactChart;