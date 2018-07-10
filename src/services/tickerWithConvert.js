const tickerWithConvert = (id) => {
    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=BTC`)
    .then(function(response) {
      return response.json();
    }).then(function(myjson){
      if (myjson){
        myjson = Object.values(myjson.data);
        return myjson;
      }
      else
        return null;
    })
   }
 
   export default tickerWithConvert;