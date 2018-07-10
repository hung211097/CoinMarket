import {number} from '../constant/config';

const check = (page) => {
  let num = (page - 1) * 10 + 1;
  return fetch('https://api.coinmarketcap.com/v2/ticker/?start='+ num +'&limit=' + number.NUMBER_ITEMS)
  .then(function(response) {
    return response.json();
  }).then(function(myJson) {
    if(!myJson.data){
      return true;
    }
    return false;
  });
}

export default check;
