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
    console.log("PROPS FROM CLASS", this.props)
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

  return (
    <div id='category' >
      <p style={{ fontWeight: "bold" }} onClick={() => onClickHandler()}>{props.category.name}</p>
      <p >{props.category.description}</p>

      <div id='subcategory'>
        {showSubcat ? props.category.subcategories.items.map(subcat => (
          <div key={subcat.id}>
            <p onClick={() => props.history.push(`/algorithms/${subcat.id}`)} >{subcat.name}</p>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default AlgosByCategories;
