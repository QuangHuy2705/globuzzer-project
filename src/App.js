import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'
import Loadable from 'react-loadable'
import {Provider} from "react-redux"
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/footer'
import LoadingComponent from './commons/loading_component/LoadingComponent'
import store from './store/index'

const Homepage = Loadable({
  loader: () => import('./components/layout/home_page/Homepage'),
  loading: LoadingComponent
})

const Create_Post_Page = Loadable({
  loader: () => import('./components/layout/create_post_page/CreateForm'),
  loading: LoadingComponent
})

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BreakpointProvider>
          <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/posts/create' component={Create_Post_Page} />
                </Switch>
            </Router>
          </Provider>
        </BreakpointProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

