const tickerWithConvert = (id) => {
    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=BTC`)
    .then(function(response) {
      return response.json();
    }).then(function(myjson){
      if (myjson){
        return myjson.data;
      }
      else
        return null;
    })
   }
 
   export default tickerWithConvert;