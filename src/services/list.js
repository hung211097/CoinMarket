import {number} from '../constant/config';
import Dollar from '../format/dollar';
import Circulating from '../format/circulating';

const list = () => {
  let page = 1;
  let num = (page - 1) * number.MAX_ITEMS + 1;
  let total_marketcap = 0;
  let end = false;
  let list = [];
  return fetch('https://api.coinmarketcap.com/v2/ticker/?start='+ num +'&limit=' + number.MAX_ITEMS)
  .then(function(response) {
    return response.json();
  }).then(function(myJson) {
    if(myJson.data)
    {
      myJson = Object.values(myJson.data);

      myJson.map((obj) => {
        total_marketcap += +obj.quotes.USD.market_cap;
        obj.quotes.USD.price = Dollar(obj.quotes.USD.price);
        obj.quotes.USD.market_cap = Dollar(obj.quotes.USD.market_cap);
        obj.quotes.USD.volume_24h = Dollar(obj.quotes.USD.volume_24h);
        obj.circulating_supply = Circulating(obj.circulating_supply, obj.symbol);
      });
      {/*myJson.total = total_marketcap;*/}
      list.concat(myJson);

      page++;
      num = (page - 1) * number.MAX_ITEMS + 1;
      while(!end)
      {
        fetch('https://api.coinmarketcap.com/v2/ticker/?start='+ num +'&limit=' + number.MAX_ITEMS)
        .then(function(response2) {
          return response2.json();
        }).then(function(myJson2) {
          if(myJson2.data)
          {
            myJson2 = Object.values(myJson.data);

            myJson2.map((obj) => {
              total_marketcap += +obj.quotes.USD.market_cap;
              obj.quotes.USD.price = Dollar(obj.quotes.USD.price);
              obj.quotes.USD.market_cap = Dollar(obj.quotes.USD.market_cap);
              obj.quotes.USD.volume_24h = Dollar(obj.quotes.USD.volume_24h);
              obj.circulating_supply = Circulating(obj.circulating_supply, obj.symbol);
            });

            list.concat(myJson);

            page++;
            num = (page - 1) * number.MAX_ITEMS + 1;
          }
          else
            end = true;
        });
      }

      list = list.sort((a, b) => {
        return a.rank > b.rank;
      });
      list.total = total_marketcap;

      return list;
    }

    return null;
  })
}

export default list;
