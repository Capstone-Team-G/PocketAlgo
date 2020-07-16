import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import AlgosByCategories from './AlgosByCategories'
import AlgorithmPage from './AlgorithmPage';
import DataStructurePage from './DTComponent';
import Quizzes from './Quizzes';
import Header from './material-ui/headertemplate'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserView >
          <Header />
          <br></br>
        </BrowserView>
        <MobileView>
          HEY HO!
        </MobileView>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bycategories" component={AlgosByCategories} />
          <Route exact path="/algorithms/:id" component={AlgorithmPage} />
          <Route exact path="/datastructures/:id" component={DataStructurePage} />
          <Route exact path="/quizzes" component={Quizzes} />
        </Switch>
      </div>
    )
  }
}

export default Routes
