const ticker = () => {

    return fetch(`https://api.coinmarketcap.com/v2/ticker/`)
     .then(response => response.json());
   }
 
export default ticker;