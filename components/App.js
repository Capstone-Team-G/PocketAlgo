import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess, getSubcategories, listSubcategoriess } from '../src/graphql/queries'

class App extends React.Component {
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
    console.log(this.state);
    return (
      <div >

        {this.state.categories.map(rest => (
          <div key={rest.id}>
            <p onClick={() => this.onClickHandler(rest.id)}>{rest.name}</p>
            <p >{rest.description}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default App;
