import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './views/Home'
import Disposition from './views/Disposition'

function App() {
  return (
    <Router>
      <Switch>
          <Route 
              path='/'
              component={Home}
              exact />
          <Route 
            path="/detail"
            component={Disposition}
            exact />
        </Switch>
    </Router>
  );
}

export default App;
