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

    <h1 align='center' style={{ fontFamily: 'Montserrat Subrayada' , fontSize: 55}}><span style={{fontFamily: 'Modak', fontWeight: 'lighter' ,fontSize: 55}}>View</span> <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F36%2F36911.png&f=1&nofb=1' height='20px' width='20px'></img> <br></br>
    <Link style={{ color: 'green' , textDecoration: 'none' }}>
    <span style={{ color: 'gold' , textDecoration: 'none' , fontSize: 45}}> [ </span>
    <span onClick={() => props.history.push(`/algorithms/${props.random()}`)}> Random Algo</span>

    <span style={{ color: 'gold' , textDecoration: 'none' , fontSize: 45}}> ] </span>
    </Link>
    </h1>

  </Paper>
</Grid>

{/* View Categories */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}

    <h1 align='center' style={{fontFamily: 'informal', fontSize: 55}}><span style={{fontFamily: 'Modak', fontWeight: 'lighter', fontSize: 55}}>View </span> <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F36%2F36911.png&f=1&nofb=1' height='20px' width='20px'></img> <br></br>
    <Link href="/bycategories" style={{ color: 'green' , textDecoration: 'none' }}>
    <span style={{ color: 'gold' , textDecoration: 'none' , fontSize: 45}}> [ </span>
    Categories
    <span style={{ color: 'gold' , textDecoration: 'none' , fontSize: 45}}> ] </span>
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
