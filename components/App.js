import React from 'react'
import Routes from './Routes'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {
        isMobile ?
          <MobileView>
            <Routes />
          </MobileView>
          : <Routes />
      }
    </div>
  )
}

export default App
