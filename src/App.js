import React, { Component } from 'react';
import Detail from './pages/Detail/index'
const CoinMarket = () => {
  return(
    <Detail/>
  );
}

class App extends Component {
  render() {
    return (
      <CoinMarket />
    );
  }
}

export default App;
