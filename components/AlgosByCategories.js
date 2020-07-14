import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess } from '../src/graphql/queries'
import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

class AlgosByCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listCategoriess))
      const categories = apiData.data.listCategoriess.items
      console.log(categories)
      this.setState({ categories })
    } catch (err) {
      console.log('error: ', err)
    }
  }



  render() {
    return (
      <div >
        <Header />
        {this.state.categories.map(category => (
          <div key={category.id}>
            <Grid item xs={12} align='center'>
          <Paper>
        {/* Place Component Below This Line */}
          <Category category={category} history={this.props.history} />
          </Paper>
          </Grid>

          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

function Category(props) {
  const [showSubcat, setShowSubcat] = useState(false)
  const onClickHandler = () => {
    setShowSubcat(!showSubcat)
  }
  const styles = {
    fontSize: 40,
    fontWeight: "bold"
  }


  let dropdown;
  const subcategories = props.category.subcategories.items;
  const algorithms = props.category.algorithms.items;

  if (subcategories.length) {
    dropdown = subcategories.map(subcat => (
      <div key={subcat.id}>
        <p onClick={() => props.history.push(`/datastructures/${subcat.id}`)} >{subcat.name}</p>
      </div>
    ))
  } else {
    dropdown = algorithms.map(algo => (
      <div key={algo.id}>
        <p onClick={() => props.history.push(`/algorithms/${algo.id}`)} >{algo.name}</p>
      </div>
    ))
  }

  return (
    <div id='category' >
      <p style={styles} onClick={() => onClickHandler()}>{props.category.name}</p>
      <p >{props.category.description}</p>
      <div id='dropdown'>
        {showSubcat ? dropdown : null}
      </div>
    </div>
  )
}

export default AlgosByCategories;
