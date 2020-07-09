import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import Landing from './landing'
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


export default function HomeTemp() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
<Grid container spacing={3}>
{/* Greeting */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}
    <Landing />
  </Paper>
</Grid>
{/* Random Algo */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    <h1 align='center'>Random Algo Here</h1>
    {/* Place Component Below This Line */}
  </Paper>
</Grid>
{/* Algo of The Day */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    <h1 align='center'>Algo Of The Day Here</h1>
    {/* Place Component Below This Line */}
  </Paper>
</Grid>
{/* See Categories */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    <h1 align='center'><Link href="/bycategories">See Categories Here</Link></h1>
    {/* Place Component Below This Line */}
  </Paper>
</Grid>
</Grid>
</React.Fragment>
  )
}
