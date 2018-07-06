import React, { Component } from 'react';
import Home from './pages/Home/index';
import {Redirect} from 'react-router-dom';

const CoinMarket = (props) => {
  let p = props.match.params.page;
  let reg = /^\d+$/;
  if(!p)
    p = 1;
  else
    if(!reg.test(p))
      return (<Redirect to="/1"/>);
  return(
    <Home page={p}/>
  );
}

{/*const App = (props) => {
  return (
    <CoinMarket page={props.match.params.page}/>
  );
}
*/}

export default CoinMarket;
