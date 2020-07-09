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
      this.setState({ categories })
    } catch (err) {
      console.log('error: ', err)
    }
  }



  render() {
    console.log("PROPS FROM CLASS", this.props)

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


  return (
    <div id='category' >
      <p style={styles} onClick={() => onClickHandler()}>{props.category.name}</p>
      <p >{props.category.description}</p>

      <div id='subcategory'>
        {showSubcat ? props.category.subcategories.items.map(subcat => (
          <div key={subcat.id}>
            <p style={{fontSize: 30 }} onClick={() => props.history.push(`/algorithms/${subcat.id}`)} >{subcat.name}</p>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default AlgosByCategories;
