import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from "react-redux"
import Homepage from './components/layout/home_page/Homepage'
import Navbar from './components/layout/navbar/Navbar'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Homepage} />
          
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

