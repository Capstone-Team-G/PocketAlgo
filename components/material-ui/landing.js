import React from 'react';
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

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <main>
      {/* style="background: url('./img/bigdata.png') no-repeat center center fixed;" */}
        {/* Hero unit */}
        <div className={classes.main}>
          <Container maxWidth="sm" >
            <div align='center'>
            <img src={logo1} height='300' width='300'/>
            </div>
            <p align='center' margin='10px'> <span style={{color: 'gold', fontFamily: 'true north' , fontSize: '80px'}}> = </span> </p>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontStyle: 'italic', fontFamily: 'true north' , fontSize: '80px', fontWeight: 'bold'}}>
            <span style={{color: 'gold'}}> "</span> Algos, To Go <span style={{color: 'gold'}}> " </span>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{fontSize: '50px'}}>
              Take a quick look at leading industry algorithms, strengthen your knowledge and understanding!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">

                <Grid item>
                  <Button paddingBottom="20px" variant="contained" color="inherit" style={{ color: 'gold' }}>
                   <Link href="/quizzes" style={{ color: 'green' , textDecoration: 'none' , fontSize: 60 }}>Take A Quiz </Link>
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
