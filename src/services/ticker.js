  let total_marketcap = 0;
        total_marketcap += +obj.quotes.USD.market_cap;
      myJson.total = total_marketcap;
     .then(response => response.json());
   }
 
export default ticker;