import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from './pages/Detail/index';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/home" component={App}/>
        <Route exact path="/detail/:id" component={Index} />
        <Route exact path="/:page" component={App}/>
        <Route exact path="/home/:page" component={App}/>
      </Switch>
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
