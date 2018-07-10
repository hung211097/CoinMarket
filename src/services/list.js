import {number} from '../constant/config';
import Dollar from '../format/dollar';
import Circulating from '../format/circulating';

const List = () => {
  let num = (page - 1) * number.MAX_ITEMS + 1;
  let total_marketcap = 0;
  let page = 1;
  let end = false;

  while(end)
  {

  }
  return fetch('https://api.coinmarketcap.com/v2/ticker/?start='+ num +'&limit=' + number.MAX_ITEMS)
  .then(function(response) {
    return response.json();
  }).then(function(myJson) {
    if(myJson)
    {
      myJson = Object.values(myJson.data);
      myJson = myJson.sort((a, b) => {
        return a.rank > b.rank;
      });

      myJson.map((obj) => {
        total_marketcap += +obj.quotes.USD.market_cap;
        obj.quotes.USD.price = Dollar(obj.quotes.USD.price);
        obj.quotes.USD.market_cap = Dollar(obj.quotes.USD.market_cap);
        obj.quotes.USD.volume_24h = Dollar(obj.quotes.USD.volume_24h);
        obj.circulating_supply = Circulating(obj.circulating_supply, obj.symbol);
      });
      myJson.total = total_marketcap;
      return myJson;
    }
    else
      return null;
  })
}

export default List;
