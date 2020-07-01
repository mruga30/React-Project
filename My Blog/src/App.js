import React from 'react';
import {BrowserRouter as Router, Route,Switch,} from 'react-router-dom';
import './index.css';
import homepage from './pages/homepage.js';
import Aboutpage from './pages/Aboutpage.js';
import Articlepage from './pages/Articlepage.js';
import ArticlesList from './pages/ArticlesList.js';
import Navbar from './navbar.js';
import Notfound from './pages/Notfound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Switch>
            <Route path ="/" component={homepage} exact/>
            <Route path ="/article/:name" component={Articlepage} />
            <Route path ="/about" component={Aboutpage} />
            <Route path ="/articles-list" component={ArticlesList} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
