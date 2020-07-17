import React, { lazy, Suspense } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  listCategoriess,
  listAlgorithmss,
  listSubcategoriess,
} from "../src/graphql/queries";
import Seedrandom from "seedrandom";

// import Footer from './material-ui/footertemplate'
// import HomeTemp from './material-ui/hometemplate'

const renderLoader = () => <p>Loading</p>;
const HomeTemp = lazy(() => import("./material-ui/hometemplate"));
const Footer = lazy(() => import("./material-ui/footertemplate"));

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      algorithms: {},
      dayAlgo: {},
    };
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listCategoriess));
      const apiAlgos = await API.graphql(graphqlOperation(listAlgorithmss));
      console.log("restics", apiAlgos);
      const categories = apiData.data.listCategoriess.items;
      const algorithms = apiAlgos.data.listAlgorithmss.items;
      this.setState({
        categories: categories,
        dayAlgo: this.randomizerDaily(algorithms),
        algorithms: algorithms,
      });
      console.log(this.state);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  randomizerDaily(arr) {
    const date = new Date().getDate();
    const ran = Seedrandom(date);
    let index = Math.floor(ran() * arr.length);
    return arr[index];
  }

  algoRandomizer() {
    const arr = this.state.algorithms;
    let index = Math.floor(Math.random() * arr.length);
    return arr[index].id;
  }

  randomOnClickHandler(event) {}

  async onClickHandler(id) {
    const apiData = await API.graphql(
      graphqlOperation(listSubcategoriess, {
        filter: {
          categoriesID: {
            eq: id,
          },
        },
      })
    );
    console.log("SUBCATEGORY", apiData);
  }

  render() {
    console.log("just this", this);
    return (
      <div style={{ backgroundColor: "black", background: "cover" }}>
        <Suspense fallback={renderLoader()}>
          <HomeTemp />
          <br></br>
          <br></br>
          <Footer />
        </Suspense>
      </div>
    );
  }
}

export default Home;
