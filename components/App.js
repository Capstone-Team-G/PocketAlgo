import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoriess } from '../src/graphql/queries'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listCategoriess))
      console.log('restics',apiData);
      const restaurants = apiData.data.listCategoriess.items
      this.setState({ restaurants })
      console.log('complete')
    } catch (err) {
      console.log('error: ', err)
    }
    // this.setState({restaurants:[{id:0,name:'AWS suck',description:'this thing doesnt work'}]})
  }

  render() {
    console.log(this.state);
    return (
      <div >
       
            {this.state.restaurants.map(rest => (
            <div  key={rest.id}>
              <p >{rest.name}</p>
              <p >{rest.description}</p>
            </div>
          ))}
     
      </div>
    );
  }
}

export default App;
