import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess } from '../src/graphql/queries'
import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import StoreLinks from './material-ui/appstorelinks'

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`
class AlgosByCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      hover: false
    }
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
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
    var linkStyle;
   if (this.state.hover) {
     linkStyle = {color: '#ed1212',cursor: 'pointer'}
   } else {
     linkStyle = {color: '#000'}
   }
    return (
      <div style={{backgroundColor: 'black'}}>
        <Header />
        <h1 style= {{color: 'white', fontFamily: 'true north' , fontFamily: 'informal', fontSize: 50}} align= "center"> <span style={{color: 'gold'}}> /* </span> Power Your Code: <span style={{color: 'gold'}}> */ </span> </h1>
        align='center'
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
        {/* Store Links */}
        <StoreLinks />

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
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: 'informal',
    color: 'green'
  }


  let dropdown;
  const subcategories = props.category.subcategories.items;
  const algorithms = props.category.algorithms.items;

  if (subcategories.length) {
    dropdown = subcategories.map(subcat => (
      <div key={subcat.id}>
        <h2 onClick={() => props.history.push(`/datastructures/${subcat.id}`)} style={{ fontFamily: 'patronum' , fontSize: 25}}> <span style={{color: 'gold'}}> / </span> {subcat.name} <span style={{color: 'gold'}}> \ </span> </h2>
      </div>
    ))
  } else {
    dropdown = algorithms.map(algo => (
      <div key={algo.id}>
        <h2 onClick={() => props.history.push(`/algorithms/${algo.id}`)} style={{ fontFamily: 'patronum' , fontSize: 25}}> <span style={{color: 'gold'}}> / </span> {algo.name} <span style={{color: 'gold'}}> \ </span> </h2>
      </div>
    ))
  }

  return (
    <div id='category' >
      <div style={styles} onClick={() => onClickHandler()}>
        <span style={{ color: 'purple' , textDecoration: 'none' , fontFamily: 'informal', fontSize: 50 }}> [ </span>
        {props.category.name}
        <span style={{ color: 'purple' , textDecoration: 'none', fontFamily: 'informal', fontSize: 50}}> ] </span>
      </div>
      <p>{props.category.description}</p>
      <div id='dropdown'>
        {showSubcat ? dropdown : null}
      </div>
    </div>
  )
}

export default AlgosByCategories;
