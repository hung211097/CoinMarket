import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Detail from './pages/Detail/index'


ReactDOM.render(
  // <Provider>
    <BrowserRouter>
      <React.Fragment>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/detail/:id/" exact component={Detail}  />
        <Route exact path="/home" component={App}/>
        <Route exact path="/about" component={App}/>
        <Route exact path="/:page" component={App}/>
        <Route exact path="/home/:page" component={App}/>
      </Switch>
      </React.Fragment>
    </BrowserRouter>
  // </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

