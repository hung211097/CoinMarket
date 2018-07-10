import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import TickerWithConvert from '../../services/tickerWithConvert';
import Header from '../../component/Layout/header';
import Footer from '../../component/Layout/footer';
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coin: [],
        i : this.props.match.params.id,
        flag: false
        };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);
    console.log(nextProps);
    if(nextProps.match.params.id != prevState.i)
    {
      return{
        coin: [],
        i: nextProps.match.params.id, 
        flag: true
      }
    }

    return null;
  }



  componentDidUpdate() {
    if (this.state.flag){
      this.setState(
      {
        flag: false
      }, function(){
      TickerWithConvert(this.state.i).then(data => this.setState({coin: data}));
    });
  }
  }
  
  componentDidMount()
  {
    this.setState({
      flag: false
    }, ()=>{
      TickerWithConvert(this.state.i).then(data => this.setState({coin: data}));
    });
  }


  // componentDidUpdate(prevProps) {
  //   if (this.props.id !== prevProps.id) {
  //     TickerWithConvert(this.props.id).then(response => this.setState({coin: response.data}));
  //   }
  // }
   

  
  // componentDidMount() {
  //   TickerWithConvert(this.props.match.params.id).then(response => this.setState({coin: response.data}));
  // }

  // componentWillMount(){
  //   var i =this.props.match.params.id;
  // }

  // getdata(){
  //   fetch(`https://api.coinmarketcap.com/v2/ticker/${this.props.match.params.id}/?convert=BTC`)
  //     .then(response => response.json())
  //     .then(response => this.setState({coin: response.data}))
  // }

  render(){
    const coinObj = this.state.coin;
    var coinArray = _.values(coinObj);
    var coinArrayquotes = _.values(coinArray[8]);
    var coinArrayUSD = _.values(coinArrayquotes[0]);
    var coinArrayBTC = _.values(coinArrayquotes[1]);
    return(
      <div className="container">

      {/* --------------------Header------------------- */}

      <Header/>

      {/* --------------------End Header------------------- */}

      {/* -----------------------Content------------------- */}
        <div className="row">
          <div className="col-md-3">
            <div className="details-panel-item--name">
              <h1>
              <img  src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coinArray[0]}.png`} />
                {coinArray[1]}
                <span className="text-bold h3 text-gray text-large">({coinArray[2]})</span>
              </h1>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="details-panel-item--price">
              <span id="quote_price">
                <span className="currency-value">${coinArrayUSD[0]}</span>
                <span className="currency-code"> USD </span>
              </span>
              <span className="percentage">
                <span className={coinArrayUSD[4] < 0 ? "no-wrap percent-change text-right drop" :coinArrayUSD[4] > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>({coinArrayUSD[4]}%)</span>
              </span>
              <br />
              <span className="price-cryto">
                <span>{coinArrayBTC[0]} BTC </span>
              </span>
              <span className="percentage-change">
                <span className={coinArrayBTC[4] < 0 ? "no-wrap percent-change text-right drop" :coinArrayBTC[4] > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>({coinArrayBTC[4]}%)</span>
              </span>
            </div>
            <br />
            <div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="menu">
                    <tr>
                      <th>
                        <h5>Market Cap</h5>
                      </th>
                      <th>
                        <h5>Volume (24h)</h5>
                      </th>
                      <th>
                        <h5>Circulating Supply</h5>
                      </th>
                      <th>
                        <h5>Max Supply</h5>
                      </th>
                      <th>
                        <h5>Total Supply</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="value">
                    <tr>
                      <td>
                        <span>${coinArrayUSD[2]}</span>
                        <span> USD</span>
                        <br />
                        <span className="price-cryto">
                          <span>{coinArrayBTC[2]} </span>
                          BTC
                          <br />
                        </span>
                      </td>
                      <td>
                        <span>${coinArrayUSD[1]}</span>
                        <span> USD</span>
                        <br />
                        <span className="price-cryto">
                          <span>{coinArrayBTC[1]} </span>
                          BTC
                          <br />
                        </span>
                      </td>
                      <td>
                        <span>{coinArray[5]}</span>
                        <span> {coinArray[2]}</span>
                        <br />
                      </td>
                      <td>
                        <span>{coinArray[7]}</span>
                        <span> {coinArray[2]}</span>
                        <br />
                      </td>
                      <td>
                      <span>{coinArray[6]}</span>
                      <span> {coinArray[2]}</span>
                      <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div >
          <p className = "ListCoin"> LIST COIN </p>
          <List />
        </div>
        {/* ----------------------End Content------------------- */}

        {/* -----------------------Footer-------------------------- */}

        <Footer/>
        {/* ----------------------End Footer-------------------------- */}
      </div>
    )
  }
}
export default Content;



