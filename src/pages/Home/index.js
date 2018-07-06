import React, { Component } from 'react';
import './index.css';
import Header from '../../component/Layout/header'
import Footer from '../../component/Layout/footer';
import Currency from '../../component/Button/currencyButton';
import Paging from '../../component/Button/pagingButton';
import Row from '../../component/Layout/row';
{/*import Tickers from '../../services/ticker';*/}

class Content extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      page: this.props.page
    }
  }

  NextPage(){
    this.setState((prevState) => ({
      page: +this.state.page + 1
    }))
  }

  render(){
    return(
      <div className="container">
        <Header />
        <div className="row bottom-margin-1x">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-3 col-md-2 col-md-push-5">
                <Currency />
              </div>

              <div className="col-xs-9 col-md-5 col-md-push-5 text-right">
                <Paging page={this.state.page} onNextPage={this.NextPage.bind(this)}/>
              </div>

              <div className="col-md-5 col-md-pull-7">
                <ul className="nav nav-tabs no-border-bottom">
                  <li className="active"><a href="/">Cryptocurrencies</a></li>
                  <li><a href="javascript:;">Watchlist</a></li>
                </ul>
              </div>
            </div>

            <div className="table-fixed-column-mobile compact-name-column">
              <div className="dataTables_wrapper no-footer">
                <table className="table floating-header  dataTable no-footer">
                  <thead>
                    <tr role="row">
                      <th className="col-rank text-center sortable sorting_asc" tabIndex="0" style={{width: 29}} colSpan="1" rowSpan="1">#</th>

                      <th id="th-name" className="sortable sorting" tabIndex="0" style={{width: 150}} colSpan="1" rowSpan="1">Name</th>
                      <th id="th-marketcap" className="sortable text-right sorting" tabIndex="0" style={{width: 130}} colSpan="1" rowSpan="1">Market Cap</th>
                      <th id="th-price" className="ssortable text-right sorting" tabIndex="0" style={{width: 69}} colSpan="1" rowSpan="1">Price</th>
                      <th id="th-volume" className="sortable text-right sorting" tabIndex="0" style={{width: 105}} colSpan="1" rowSpan="1">Volume (24h)</th>
                      <th id="th-totalsupply" className="sortable text-right sorting" tabIndex="0" style={{width: 156}} colSpan="1" rowSpan="1">Circulating Supply</th>
                      <th id="th-change" className="sortable text-right sorting" tabIndex="0" style={{width: 109}} colSpan="1" rowSpan="1">Change (24h)</th>
                    </tr>
                  </thead>

                    <Row page={this.state.page}/>

                </table>
              </div>
            </div>

            <Footer/>

          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Content page={this.props.page}/>
    );
  }
}

export default App;
