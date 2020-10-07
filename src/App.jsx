import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Router>
          <Switch>
            <Route path='/accueil' exact>
              <Navbar/>
            </Route>

            <Route path="/cv" exact>
            </Route>

            <Route path="/portfolio" exact>
            </Route>

            <Route path="/contact" exact>          
            </Route>           
          </Switch>
        </Router>
    </div>
  );
}

export default App;
