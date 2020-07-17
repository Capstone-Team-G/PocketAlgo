import React, { useState } from 'react' //react hooks
import { makeStyles } from '@material-ui/core/styles'; //changes material-ui's default styles
import { Link } from "react-router-dom"
import MobileRightMenuSlider from "@material-ui/core/Drawer" //custom name
import logo4 from '../../public/img/logo4.png'
import Cat from '../../public/img/Categories.png'
import About from '../../public/img/AboutUs.png'
import Algo from '../../public/img/AlgoOfTheDay.png'
import HomeButton from '../../public/img/Home.png'
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar, //like image in html
  Divider,
  List,
  Typography, //used for titles amd text
  Box, //container specifies component
  Icon,
  ListItemIcon
} from '@material-ui/core'
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons'
// import avatar from '../avatar.png'
// import Footer from "./Footer"
//CSS STYLING
//classes
const usedStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 400,
    background: "white",
    height: "100%"
  },
  link: {
    color: 'white'
  },
  listedItem:{
    color: "black"
  }
}))
const menuItems = [
  {
    listIcon: <img src={'https://oimg.photobucket.com/albums/v636/THASTHATBOY/8474a721b39dbc1336ec0288cf832e90.png'} height='350px' width='350px'/>,
    // listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <img src={'https://oimg.photobucket.com/albums/v636/THASTHATBOY/4c846021d268fedb398420dd33ac1397.png'} height='350px' width='350px'/>,
    // listText: "Algo",
    // listPath: <div onClick={() => props.history.push(`/algorithms/${props.state.dayAlgo.id}`)}></div>
  },
  {
    listIcon: <img src={'https://oimg.photobucket.com/albums/v636/THASTHATBOY/f88bb3465d39c4ba87e0d7952ddba0f3.png'} height='350px' width='350px'/>,
    // listText: "Categories",
    listPath: "/bycategories"
  },
  {
    listIcon: <img src={'https://oimg.photobucket.com/albums/v636/THASTHATBOY/241fddcdeb225255d8f37267a285d009.png'} height='350px' width='350px'/>,
    // listText: "Contacts",
    listPath: "/contacts"
  }
]
const MobileHeader
 = (props) => {
  const [state, setState] = useState({
    left: false //hidden by default
  })
  //functional component
  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open})
  }
  const classes = usedStyles();
  const sideList = slider => (
    <Box
    className= {classes.menuSliderContainer} component="div"
    onClick={toggleSlider(slider, false)}
    >
    {/* <Avatar className={classes.avatar} src={avatar} alt="Kay"/> */}
    <Divider />
    <List>
      {menuItems.map((listItem, key) => (
      <ListItem button key={key} component={Link} to={listItem.listPath}>
        <ListItemIcon className={classes.listedItem} >
        {/* <div onClick={() => props.history.push(`/algorithms/${props.state.dayAlgo.id}`)}> */}
          {listItem.listIcon}
        </ListItemIcon>
        <ListItemText
        className={classes.listedItem}
        primary={listItem.listText}/>
        </ListItem>
        ))}
    </List>
  </Box>
  )
  return (
    <>
    <CssBaseline />
   <Box component= "nav">
   <AppBar position="relative" style={{backgroundColor: 'green'}}>
       <Toolbar>
         <IconButton onClick={toggleSlider("left", true)}>
         <img src={'https://oimg.photobucket.com/albums/v636/THASTHATBOY/logo4.png'} height='60px' width='60px' className={classes.icon}/>
         </IconButton>
         <Link className={classes.link} to="/" style={{ textDecoration: 'none' , fontSize: 40}}> PocketAlgo</Link>
         <MobileRightMenuSlider
         anchor="left"
         open={state.left}
         onClose={toggleSlider('left', false)}>
           {sideList("left")}
           {/* <Footer/> */}
         </MobileRightMenuSlider>
       </Toolbar>
     </AppBar>
   </Box>
   </>
  );
};
export default MobileHeader
