import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function RenderApp(){
  return(
    <App />
  );
}
ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={RenderApp} />
        <Route exact path="/home" component={RenderApp} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
