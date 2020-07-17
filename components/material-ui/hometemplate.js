import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import Landing from './landing'
import clsx from 'clsx';
import StoreLinks from '../material-ui/appstorelinks'
import logo3 from '../../public/img/logo3.png'

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


export default function HomeTemp(props) {
  // console.log('propppssss', props)
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
<Grid container spacing={3}>
{/* Greeting */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}
    <Landing state={props.state} history={props.history}/>
  </Paper>
</Grid>
{/* Random Algo */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}

    <h1 align='center' style={{fontFamily: 'informal', fontSize: 45}}>View <br></br>
    <Link href="/bycategories" style={{ color: 'green' , textDecoration: 'none' }}>
    <span style={{ color: 'purple' , textDecoration: 'none' }}> [ </span>
      Random Algo
    <span style={{ color: 'purple' , textDecoration: 'none' }}> ] </span>
    </Link>
    </h1>

  </Paper>
</Grid>

{/* View Categories */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}

    <h1 align='center' style={{fontFamily: 'informal', fontSize: 45}}>View <br></br>
    <Link href="/bycategories" style={{ color: 'green' , textDecoration: 'none' }}>
    <span style={{ color: 'purple' , textDecoration: 'none' }}> [ </span>
    Categories Here
    <span style={{ color: 'purple' , textDecoration: 'none' }}> ] </span>
    </Link>
    </h1>

  </Paper>
</Grid>

{/* store links */}
<StoreLinks />
</Grid>
</React.Fragment>
  )
}

//
