import Dollar from '../format/dollar';
import Circulating from '../format/circulating';

const tickerWithConvert = (id) => {
    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=BTC`)
    .then(function(response) {
      return response.json();
    }).then(function(myjson){
      if (myjson){
        myjson = myjson.data;
        myjson.quotes.USD.price = Dollar(myjson.quotes.USD.price);
        myjson.quotes.USD.market_cap = Dollar(myjson.quotes.USD.market_cap);
        myjson.quotes.USD.volume_24h = Dollar(myjson.quotes.USD.volume_24h);
        myjson.circulating_supply = Circulating(myjson.circulating_supply, myjson.symbol);
        myjson.max_supply = Circulating(myjson.max_supply, myjson.symbol);
        myjson.total_supply = Circulating(myjson.total_supply, myjson.symbol);
        myjson.quotes.BTC.market_cap = Dollar(myjson.quotes.BTC.market_cap);
        myjson.quotes.BTC.volume_24h = Dollar(myjson.quotes.BTC.volume_24h);
        return myjson;
      }
      else
        return null;
    })
   }
 
   export default tickerWithConvert;
