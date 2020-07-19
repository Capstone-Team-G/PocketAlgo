import React from 'react';
import { Route }from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo1 from '../../public/img/logo1.png';
import bigData from '../../public/img/bigdata.png';
import AlgorithmPage from '../AlgorithmPage'


const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  main: {
    backgroundImage: {bigData}
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

export default function Landing(props) {

  // let algoId = props.algoId;
  console.log('Success', props)
  const classes = useStyles();

  return (
    <React.Fragment >
      <main>
      {/* style="background: url('./img/bigdata.png') no-repeat center center fixed;" */}
        {/* Hero unit */}
        <div className={classes.main}>

          <Container maxWidth="sm">
            <div align='center'>
            {/* <ProductHeroLayout backgroundClassName={classes.background}> */}
{/* Increase the network loading priority of the background image. */}

{/* <img */}
{/* // src={backgroundImage} */}
{/* // alt="increase priority" */}
{/* /> */}

            <img src={logo1} height='250' width='300' align='center'/>
            <p align='center' margin='10px'><span style={{color: 'white' , fontSize: '80px'}}>"</span> <span style={{color: 'gold',fontSize: '80px'}}> == <img src='https://media.istockphoto.com/vectors/cartoon-of-businessman-holding-arrow-sign-pointing-down-vector-id926829172?k=6&m=926829172&s=612x612&w=0&h=DZFHTii7JE8zqJJMNWbcV1nhHaaOVvmcQ4JpoFS1dLA=' height='80px' width='80px'></img></span> </p>
            <Typography align="center" color="textPrimary" style={{ fontStyle: 'italic', fontSize: '50px', fontWeight: 'bold', fontFamily: 'Rock Salt'}}>
            <span style={{color: 'gold'}}> "</span> Algos, To Go <span style={{color: 'gold'}}> " </span>
            </Typography>
            </div>
              <br></br>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{fontSize: '50px'}}>
              Take a quick look at leading industry algorithms, strengthen your knowledge and understanding!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">

                <Grid item>
                  <Button paddingbottom="20px" variant="outlined" color="inherit" style={{ color: 'green' ,  fontSize: 40 , textDecoration: 'none'}}>
                   <div onClick={() => props.history.push(`/algorithms/${props.state.dayAlgo.id}`)}> Algo Of The Day </div>
                  </Button>

                </Grid>
              </Grid>
              <br></br>
            </div>
          </Container>
        </div>

      </main>

    </React.Fragment>
  );
}

{/* <ProductHeroLayout backgroundClassName={classes.background}>
{/* Increase the network loading priority of the background image. */}
{/*
<img
src={backgroundImage}
alt="increase priority"
/> */}
// onClick={() => props.state.dayAlgo.id ? <Route exact path={`/algorithms/${props.state.dayAlgo.id}`}/> : <h1>Loading... </h1>
/* <Container className={classes.cardGrid} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container> */
