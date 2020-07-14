import React, { useState }  from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess, getSubcategories, listSubcategoriess } from '../src/graphql/queries'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'
import styled from 'styled-components';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`

class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      hover: false
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
    var linkStyle;
   if (this.state.hover) {
     linkStyle = {color: '#ed1212',cursor: 'pointer'}
   } else {
     linkStyle = {color: '#000'}
   }
    return (
      <div >
        <Header />
        <h1 align='center'>Choose Your Quiz Type:</h1>
        {this.state.categories.map(category => (
          <div key={category.id}>
            <Grid item xs={12} align='center'>
          <Paper>
        {/* Place Component Below This Line */}
        <HoverText style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <Category category={category} history={this.props.history} />
          </HoverText>
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

export default Quizzes;
