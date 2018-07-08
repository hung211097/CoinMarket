import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route, withRouter, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Detail from './pages/Detail/index'

function RenderApp(){
  return(
    <Detail />
  );
}
ReactDOM.render(
  // <Provider>
    <BrowserRouter>
      <React.Fragment>
        {/* <Route exact path="/" component={RenderApp} />
        <Route exact path="/home" component={RenderApp} /> */}
        <Route path="/detail/:id/" exact component={Detail}  />
      </React.Fragment>
    </BrowserRouter>
  // </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

