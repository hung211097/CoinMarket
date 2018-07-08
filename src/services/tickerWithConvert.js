const tickerWithConvert = (id) => {

    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=BTC`)
     .then(response => response.json());
   }
 
   export default tickerWithConvert;