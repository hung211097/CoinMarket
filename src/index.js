import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

{/*function RenderApp(req) {
  return (<App/>);
}*/}


ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/home" component={App}/>
        <Route exact path="/about" component={App}/>
        <Route exact path="/:page" component={App}/>
        <Route exact path="/home/:page" component={App}/>
      </Switch>
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
