import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const AlgoViewFunction=(props)=>{
const data=props.data;
    return(
        <div key={data.id}>
            <Grid item xs={12} align='center'>
          <Paper>
            <h2 align='center' style={{fontFamily: 'Tahoma', fontWeight: 'bold', fontSize: 30, paddingTop: 10 }}> <span style={{color: 'gold'}}> /* </span> {data.name} <span style={{color: 'gold'}}> */ </span> </h2>
            <p align='center' style= {{paddingLeft: 50, paddingRight: 50 , paddingBottom: 40}}>{data.description}</p>
            </Paper>
            </Grid>
        </div>
    )
}

export default AlgoViewFunction;
