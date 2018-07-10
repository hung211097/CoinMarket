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

                <tbody>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>
                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                  <tr id="id-bitcoin" role="row">
                    <td className="text-center sorting_1">1</td>
                    <td className="no-wrap currency-name" data-sort="Bitcoin">
                      <a className="currency-name-container link-secondary" href="javascript:;">Bitcoin</a>
                    </td>
                    <td className="no-wrap market-cap text-right">
                      $112,415,887,963
                    </td>
                    <td className="no-wrap price text-right">
                      $4,477,320,000
                    </td>

                    <td className="no-wrap volume text-right">
                      $6,562.41
                    </td>

                    <td className="no-wrap circulating-supply text-right">
                      17,130,275 BTC
                    </td>

                    <td className="no-wrap percent-change text-right">
                      -0.75%
                    </td>
                  </tr>
                </tbody>
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
