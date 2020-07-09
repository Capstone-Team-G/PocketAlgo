import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AlgosByCategories from './AlgosByCategories'
import AlgorithmPage from './AlgorithmPage';
import DataStructurePage from './DTComponent';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="https://master.d1utv16exoeqqk.amplifyapp.com/" component={Home} />
        <Route exact path="https://master.d1utv16exoeqqk.amplifyapp.com/bycategories" component={AlgosByCategories} />
        <Route exact path="https://master.d1utv16exoeqqk.amplifyapp.com/algorithms/:id" component={AlgorithmPage} />
        <Route exact path="https://master.d1utv16exoeqqk.amplifyapp.com/datastructures/:id" component={DataStructurePage} />
      </Switch>
    )
  }
}

export default Routes
