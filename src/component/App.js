import React, { Component } from 'react';
import './App.css';
import _ from '../../node_modules/lodash/lodash';
import {number} from '../constant/config';

const Title = () => {
  return(
    <div className="container">
      <h2 className="title">Top {number.NUMBER_ITEMS} Cryptocurrencies by Market Capitalization</h2>
      <hr/><br/><br/>
      <div className="row bottom-margin-1x">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-3 col-md-2 col-md-push-5">
              <div id="currency-switch" className="btn-group">  {/*Currency Component--------------------------------------------*/}
                <button type="button" id="currency-switch-button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">USD</button>
              </div>
            </div>

            <div className="col-xs-9 col-md-5 col-md-push-5 text-right">
                <ul className="pagination top-paginator">      {/*Paging Button Component--------------------------------------------*/}
                  <li><a href="">Next 10→</a></li>
                  <li><a href="">View All</a></li>
                </ul>
            </div>

            <div class="col-md-5 col-md-pull-7">
              <ul class="nav nav-tabs no-border-bottom">
                <li class="active"><a href="/">Cryptocurrencies</a></li>
                <li><a href="javascript:;">Watchlist</a></li>
              </ul>
            </div>
          </div>

          <div className="table-fixed-column-mobile compact-name-column">
            <div className="dataTables_wrapper no-footer">
              <table className="table floating-header  dataTable no-footer">
                <thead>
                  <tr role="row">
                    <th className="col-rank text-center sortable sorting_asc" tabindex="0" style={{width: 29}} colspan="1" rowspan="1">#</th>

                    <th id="th-name" className="sortable sorting" tabindex="0" style={{width: 150}} colspan="1" rowspan="1">Name</th>
                    <th id="th-marketcap" className="sortable text-right sorting" tabindex="0" style={{width: 130}} colspan="1" rowspan="1">Market Cap</th>
                    <th id="th-price" className="ssortable text-right sorting" tabindex="0" style={{width: 69}} colspan="1" rowspan="1">Price</th>
                    <th id="th-volume" className="sortable text-right sorting" tabindex="0" style={{width: 105}} colspan="1" rowspan="1">Volume (24h)</th>
                    <th id="th-totalsupply" className="sortable text-right sorting" tabindex="0" style={{width: 156}} colspan="1" rowspan="1">Circulating Supply</th>
                    <th id="th-change" className="sortable text-right sorting" tabindex="0" style={{width: 109}} colspan="1" rowspan="1">Change (24h)</th>
                  </tr>
                </thead>
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
              </table>
            </div>
          </div>

          <div className="footer">
            <div className="row text-center h3 margin-bottom--lv2">
              <strong>Total Market Cap: <span id="total-marketcap" className="market-cap">$267,653,949,612</span></strong>
            </div>
            <div className="pull-right">
              <ul className="pagination bottom-paginator">
                <li><a href="">Next 10→</a></li>      {/*Paging Button Component--------------------------------------------*/}
                <li><a href="">View All</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Title />
    );
  }
}

export default App;
