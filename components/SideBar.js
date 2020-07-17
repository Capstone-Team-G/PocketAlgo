import React from "react";
import { Link } from 'react-router-dom'
import Sidebar from "react-sidebar";

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div>
            <Link to={`/`} activeClassName="active">Home</Link>
            <Link to={`/bycategories`} activeClassName="active">Catygories</Link>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default Side;


// import React from "react";
// import Sidebar from "react-sidebar";

// const mql = window.matchMedia(`(min-width: 800px)`);

// class Side extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarDocked: mql.matches,
//       sidebarOpen: false
//     };

//     this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   componentWillMount() {
//     mql.addListener(this.mediaQueryChanged);
//   }

//   componentWillUnmount() {
//     this.state.mql.removeListener(this.mediaQueryChanged);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   mediaQueryChanged() {
//     this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         docked={this.state.sidebarDocked}
//         onSetOpen={this.onSetSidebarOpen}
//       >
//         <b>Main content</b>
//       </Sidebar>
//     );
//   }
// }

// export default Side;p