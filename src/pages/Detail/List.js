import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import {BrowserRouter , Route, withRouter, Link} from 'react-router-dom';
import Ticker from '../../services/ticker'
import Detail from '../Detail/index'


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: {},
        }
    }
     
  
    componentDidMount()
    {
        Ticker().then(response => this.setState({data: response.data}));
    }
    renderRow(){
    return Object.entries(this.state.data).map(([key, value], i) => {
        return (
            <BrowserRouter>
                <React.Fragment>
                <tr key={key}>
                    <th scope="row" className = "rank">{value.rank}</th>
                    <td >
                        <img  src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${value.id}.png`} />
                        <Link onClick={Detail} className = "active nameCoin" key={key} to={`/detail/${value.id}`}>{value.name}</Link>
                    </td>
                    <td >
                        <Link onClick={Detail} className = "active" key={key} to={`/detail/${value.id}`}>${value.quotes.USD.market_cap}</Link>
                    </td>
                    <td >
                        <Link onClick={Detail} className = "active" key={key} to={`/detail/${value.id}`}>${value.quotes.USD.price}</Link>
                    </td>
                    <td >
                        <Link onClick={Detail} className = "active" key={key} to={`/detail/${value.id}`}>${value.quotes.USD.volume_24h}</Link>
                    </td>
                    <td >
                        <Link onClick={Detail} className = "active" key={key} to={`/detail/${value.id}`}>{value.circulating_supply} {value.symbol}</Link>
                    </td>
                    <td className={value.quotes.USD.percent_change_24h < 0 ? "no-wrap percent-change text-right drop" : value.quotes.USD.percent_change_24h > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>
            {value.quotes.USD.percent_change_24h} %</td>
                </tr>
                </React.Fragment>
             </BrowserRouter>
        )
    })
}

    render(){
      return (
        <div className="container-fluid">
            <Table className = "title">
                <thead>
                    <tr>
                        <th className= "rank">#</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Circulating Supply</th>
                        <th>Change (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data ? this.renderRow() : null}
                </tbody>
            </Table>
        </div>
    )
    }
}
export default List;