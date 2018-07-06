import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

{/*function RenderApp(req) {
  return (<App/>);
}*/}

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App}/>
      <Route exact path="/home" component={App}/>
      <Route exact path="/:page" component={App}/>
      <Route exact path="/home/:page" component={App}/>
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
