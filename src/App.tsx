import React from 'react';
import './App.css';
import Home from './views/home'
import Test6 from './views/test6'
import { createBrowserHistory } from 'history'
import {Router, Switch, Route } from 'react-router-dom'
// hash`
// import { HashRouter as Router, Switch, Route } from 'react-router-dom'
{/* <HashRouter></HashRouter> */}
// history 模式
const browserHistory = createBrowserHistory()


const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/test6" component={Test6} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
