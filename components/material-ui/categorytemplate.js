import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess, getSubcategories, listSubcategoriess } from '../src/graphql/queries'
import Landing from './material-ui/landing'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'
import AlgoTemp from './material-ui/algotemplate'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listCategoriess))
      console.log('restics', apiData);
      const categories = apiData.data.listCategoriess.items
      this.setState({ categories })
      console.log('complete')
    } catch (err) {
      console.log('error: ', err)
    }
  }

  async onClickHandler(id) {
    const apiData = await API.graphql(graphqlOperation(listSubcategoriess, {
      filter: {
        categoriesID: {
          eq: id
        }
      }
    }
    ))
    console.log('SUBCATEGORY', apiData);

  }

  render() {
    console.log('cats', this.state.categories)
    return (

<Container maxWidth="md">
            <h2 align='center'>This Will Be current Category</h2>
          <Grid container spacing={4} align='center'>
            {this.state.categories.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F40b8099e638526dce298f8dc91246173d56e389a%2F68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38332f427562626c65736f72742d6564697465642d636f6c6f722e7376672f32323070782d427562626c65736f72742d6564697465642d636f6c6f722e7376672e706e67&f=1&nofb=1"

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => this.onClickHandler(card.id)} size="small" color="secondary" >
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Graphs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
    )
            }
          }
