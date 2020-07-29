import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home'
import Notification from './component/Notification'
import Transaction from './component/Transaction'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Notification" component={Notification} />
              <Route exact path="/Trans" component={Transaction} />
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
