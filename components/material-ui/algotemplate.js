import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function AlgoTemp() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
<Grid container spacing={3}>
{/* Chart */}
<Grid item xs={12} md={8} lg={9}>
  <Paper className={fixedHeightPaper}>
  <h1 align='center'>Place Graph Here</h1>
    {/* Place Graph Here */}
  </Paper>
</Grid>
{/* Recent Deposits */}
<Grid item xs={12} md={4} lg={3}>
  <Paper className={fixedHeightPaper}>
  <h1 align='center'>Place Algorithm name + description HERE</h1>
    {/* Place Algorithm name + description here */}
  </Paper>
</Grid>
{/* Recent Orders */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    <h1 align='center'>Place Code Here</h1>
    {/* Place Code Here */}
  </Paper>
</Grid>
</Grid>
</React.Fragment>
  )
}
