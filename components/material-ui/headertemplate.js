import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo4 from '../../public/img/logo4.png';
import Home from '../Home';
import MobileHeader from './mobileHeaderTemp'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Header (props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <MobileView>
      <MobileHeader state={props.state} history={props.history}/>

    </MobileView>

      {/* <CssBaseline />

      <AppBar position="relative" style={{backgroundColor: 'green'}}>
        <Toolbar>
          <img src={logo4} height='60px' width='60px' className={classes.icon}/>

          <Link href="/" variant="h6" color="inherit" noWrap style={{ textDecoration: 'none' , fontSize: 40}}> PocketAlgo</Link>

        </Toolbar>
      </AppBar> */}

    </React.Fragment>
  );
}
