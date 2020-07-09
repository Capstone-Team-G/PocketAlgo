import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess } from '../src/graphql/queries'

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
    return (
      <div >
        {this.state.categories.map(category => (
          <div key={category.id}>
            <Category category={category} history={this.props.history} />
          </div>
        ))}
      </div>
    );
  }
}

function Category(props) {
  const [showSubcat, setShowSubcat] = useState(false)
  const onClickHandler = () => {
    setShowSubcat(!showSubcat)
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
      <p style={{ fontWeight: "bold" }} onClick={() => onClickHandler()}>{props.category.name}</p>
      <p >{props.category.description}</p>

      <div id='dropdown'>
        {showSubcat ? dropdown : null}
      </div>
    </div>
  )
}

export default AlgosByCategories;
