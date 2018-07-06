import React from 'react';
import Ticker from '../../services/ticker';

class Rows extends React.Component {
  constructor(props)
  {
    super(props);

    this.state={
      list:[],
      page: this.props.page,
      step: 0,
      flag: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState.page);
    console.log(nextProps.page);
    if(nextProps.page != prevState.page)
    {
      return{
        list: [],
        page: nextProps.page,
        step: null,
        flag: true
      }
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log(nextProps);
    console.log(nextState);
    if(this.state.flag)
      return true;

    return false;
  }

  componentDidUpdate() {
    this.setState({
      step: (this.state.page - 1) * 10,
      flag: false
    });

    Ticker(this.state.page).then((data) => {
      this.setState({
        list: data,
      });
    });
  }
  
  componentWillMount()
  {
    this.setState({
      step: (this.state.page - 1) * 10,
      flag: false
    });

    Ticker(this.state.page).then((data) => {
      this.setState({
        list: data,
      });
    });

    console.log('Hello');
  }

  render(){
    return (
      <tbody>
        {this.state && this.state.list && this.state.list.map((view, i) => (
          <tr id={"id-" + view.name} role="row" key={view.id}>
            <td className="text-center sorting_1">{i + 1 + this.state.step}</td>
            <td className="no-wrap currency-name" data-sort={view.name}>
              <img className="logo-sprite" src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + view.id + ".png"} alt={view.name} width="16px" height="16px"/>
              <a className="currency-name-container link-secondary" href="javascript:;">{view.name}</a>
            </td>
            <td className="no-wrap market-cap text-right">
              {view.quotes.USD.market_cap}
            </td>
            <td className="no-wrap price text-right">
              {view.quotes.USD.price}
            </td>

            <td className="no-wrap volume text-right">
              {view.quotes.USD.volume_24h}
            </td>

            <td className="no-wrap circulating-supply text-right">
              {view.circulating_supply}
            </td>

            <td className={view.quotes.USD.percent_change_24h < 0 ? "no-wrap percent-change text-right drop" : view.quotes.USD.percent_change_24h > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>
              {view.quotes.USD.percent_change_24h}%
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
export default Rows;
