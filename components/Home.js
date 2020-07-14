import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess, listAlgorithmss, listSubcategoriess } from '../src/graphql/queries'
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
import HomeTemp from './material-ui/hometemplate'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      algorithm: {}
    }
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listCategoriess));
      const apiAlgos = await API.graphql(graphqlOperation(listAlgorithmss));
      console.log('restics', apiAlgos);
      const categories = apiData.data.listCategoriess.items;
      const algorithms = apiAlgos.data.listAlgorithmss.items;
      this.setState({ categories: categories, algorithm: this.randomizer(algorithms) });
      console.log(this.state);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  randomizer(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
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
      <div >

        <Header />
        <br></br>
        <HomeTemp />

        <br></br>

        {/* Footer */}
        <br></br>
        <Footer />
        {/* End footer */}

        {/* {this.state.categories.map(rest => (
          <div key={rest.id}>
            <p onClick={() => this.onClickHandler(rest.id)}>{rest.name}</p>
            <p >{rest.description}</p>
          </div>
        ))} */}


      </div>
    );
  }
}

export default Home;
