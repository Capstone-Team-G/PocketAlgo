import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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


export default function StoreLinks() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
<Grid container spacing={3}>
{/* View Store Links */}
<Grid item xs={12}>
  <Paper className={classes.paper}>
    {/* Place Component Below This Line */}
    <h1 align='center' style={{fontFamily: 'informal'}}>
    <img src={logo3} height='80' width='80' align='center'/>
    <span style={{color: 'gold', fontFamily: 'true north' , fontSize: '60px', paddingLeft: 20, paddingTop: 10, paddingRight: 20}}> ? </span>
    <img src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1a%2F49%2F22%2F1a49226d155846acb790eeb919f63c8e.jpg&f=1&nofb=1`} height='80' width='80' align='center'/>
    <span style={{color: 'gold', fontFamily: 'true north' , fontSize: '60px', paddingLeft: 20, paddingTop: 10}}> : </span>
    <img src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimageog.flaticon.com%2Ficons%2Fpng%2F512%2F37%2F37150.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&f=1&nofb=1`} height='80' width='120' align='center' style={{paddingbottom: 20}}/>
    </h1>

  </Paper>
</Grid>

</Grid>
</React.Fragment>
  )
}

