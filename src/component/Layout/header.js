import React from 'react';
import ReactDOM from 'react-dom';
import {number} from '../../constant/config';
 import './header.css'

class header extends React.Component {
  render(){
    return(
        <nav id="NAV_1">
        <div id="DIV_2">
          <div id="DIV_3">
            <a href="/" id="A_4"><img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt="CoinMarketCap" height={45} width={263} id="IMG_5" /><img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg" alt="CoinMarketCap" height={45} width={263} id="IMG_6" /></a>
          </div>
          <div id="DIV_7">
            <ul id="UL_8">
              <li id="LI_9">
                <a href="#" id="A_10">Market Cap<span id="SPAN_11" /></a>
                <ul id="UL_12">
                  <li id="LI_13">
                    <a href="/" id="A_14">All Cryptocurrencies</a>
                  </li>
                  <li id="LI_15">
                    <a href="/coins/" id="A_16">Coins Only</a>
                  </li>
                  <li id="LI_17">
                    <a href="/tokens/" id="A_18">Tokens Only</a>
                  </li>
                </ul>
              </li>
              <li id="LI_19">
                <a href="#" id="A_20">Trade Volume<span id="SPAN_21" /></a>
                <ul id="UL_22">
                  <li id="LI_23">
                    <a href="/currencies/volume/24-hour/" id="A_24">24 Hour Volume Rankings (Currency)</a>
                  </li>
                  <li id="LI_25">
                    <a href="/exchanges/volume/24-hour/" id="A_26">24 Hour Volume Rankings (Exchange)</a>
                  </li>
                  <li id="LI_27">
                    <a href="/currencies/volume/monthly/" id="A_28">Monthly Volume Rankings (Currency)</a>
                  </li>
                </ul>
              </li>
              <li id="LI_29">
                <a href="#" id="A_30">Trending<span id="SPAN_31" /></a>
                <ul id="UL_32">
                  <li id="LI_33">
                    <a href="/gainers-losers/" id="A_34">Gainers and Losers</a>
                  </li>
                  <li id="LI_35">
                    <a href="/new/" id="A_36">Recently Added</a>
                  </li>
                </ul>
              </li>
              <li id="LI_37">
                <a href="#" id="A_38">Tools<span id="SPAN_39" /></a>
                <ul id="UL_40">
                  <li id="LI_41">
                    <a href="/charts/" id="A_42">Global Charts</a>
                  </li>
                  <li id="LI_43">
                    <a href="/historical/" id="A_44">Historical Snapshots</a>
                  </li>
                  <li id="LI_45">
                    <a href="/calculator/" id="A_46">Currency Converter Calculator</a>
                  </li>
                  <li id="LI_47">
                    <a href="/widget/" id="A_48">Website Widgets</a>
                  </li>
                  <li id="LI_49">
                    <a href="/watchlist/" id="A_50">Watchlist</a>
                  </li>
                  <li id="LI_51">
                    <a href="https://payments.changelly.com/?crypto=BTC&fiat=USD&ref_id=coinmarketcap" rel="nofollow noopener" id="A_52">Buy Cryptocurrency</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="DIV_53">
            <form action="/search/" id="FORM_54">
              <div id="DIV_55">
                <span id="SPAN_56"><input type="text" placeholder="Search" name="q" id="INPUT_57" /></span>
                <span id="SPAN_59" />
                <div id="DIV_60">
                </div>
                <div id="DIV_61">
                </div><span id="SPAN_62" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default header;
