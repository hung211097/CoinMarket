import React, { Component } from 'react';
import Home from './home';
import {Redirect} from 'react-router-dom';
import CheckLastPage from '../../services/checkLastPage';
import ErrorPage from '../Error/error';

const CoinMarket = (props) => {

  let p = props.match.params.page;
  let last = false;
  CheckLastPage(+p + 1).then((flag) =>{
    last = flag;
  }).then(() => {
    return(
      <div className="container">
        Loading...
      </div>
    );
  });

  let reg = /^\d+$/;
  if(!p)
    p = 1;
  else
    if(!reg.test(p))
      return (<Redirect to="/1"/>);

      return(
        <div className="container">
          {!last ?
            <Home page={p} lastPage={last}/>
            :
            <ErrorPage />
          }
        </div>
      );

}

export default CoinMarket;
