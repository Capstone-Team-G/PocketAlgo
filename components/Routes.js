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
        <Route exact path="/" component={Home} />
        <Route exact path="/bycategories" component={AlgosByCategories} />
        <Route exact path="/algorithms/:id" component={AlgorithmPage} />
        <Route exact path="/datastructures/:id" component={DataStructurePage} />
      </Switch>
    )
  }
}

export default Routes
