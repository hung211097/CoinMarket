import React from 'react';
import Ticker from '../../services/ticker';
import {Link} from 'react-router-dom';

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
    if(+nextProps.page !== +prevState.page)
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


  componentDidUpdate() {
    if(this.state.flag)
    {
      this.setState({
        step: (this.state.page - 1) * 10,
        flag: false
      }, function(){
        Ticker(this.state.page).then((data) => {
          this.setState({
            list: data,
          });
        }).then(()=>{
          this.props.onTotalMarket(this.state.list.total);
        });
      });
    }
  }

  componentDidMount()
  {
    this.setState({
      step: (this.state.page - 1) * 10,
      flag: false
    }, () => {
      Ticker(this.state.page).then((data) => {
        this.setState({
          list: data,
        });
      }).then(()=>{
        this.props.onTotalMarket(this.state.list.total);
      });
    });
  }

  render(){
    return (
      <tbody>
        {this.state && this.state.list && this.state.list.map((view, i) => (
          <tr id={"id-" + view.name} role="row" key={view.id}>
            <td className="text-center sorting_1">{i + 1 + this.state.step}</td>
            <td className="no-wrap currency-name" data-sort={view.name}>
              <img className="logo-sprite" src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + view.id + ".png"} alt={view.name} width="16px" height="16px"/>
              <Link to={`/detail/${view.id}`} className="currency-name-container link-secondary">{view.name}</Link>
            </td>
            <td className="no-wrap market-cap text-right">
              {view.quotes.USD.market_cap}
            </td>
            <td className="no-wrap price text-right">
            <Link to={`/detail/${view.id}`}>{view.quotes.USD.price}</Link>
            </td>

            <td className="no-wrap volume text-right">
            <Link to={`/detail/${view.id}`}>{view.quotes.USD.volume_24h}</Link>
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
