import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route, withRouter, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Details from './pages/Detail/index'
import Header from './component/Layout/header';
import Footer from './component/Layout/header';
import List from './pages/Detail/List';
import Index from './pages/Detail/index';

function RenderApp(){
  return(
    <Details />
  );
}
ReactDOM.render(
  // <Provider>
    <BrowserRouter>
      <React.Fragment>
        {/* <Route exact path="/" component={RenderApp} />
        <Route exact path="/home" component={RenderApp} /> */}
        <Route exact path="/detail/:id" component={Index} />
      </React.Fragment>
    </BrowserRouter>
  // </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

