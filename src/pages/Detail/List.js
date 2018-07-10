import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import {BrowserRouter , Route, withRouter, Link} from 'react-router-dom';
import Ticker from '../../services/ticker'
import Detail from '../Detail/index'
import Row from '../../component/Layout/row'


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [],
        }
    }
     
  
    componentDidMount()
    {
        Ticker(1).then(data => this.setState({data: data}));
    }

    TotalUpdate(value){
        
    }
    

    render(){
      return (
        <div className="table-fixed-column-mobile compact-name-column">
              <div className="dataTables_wrapper no-footer">
                <table className="table floating-header  dataTable no-footer">
                  <thead>
                    <tr role="row">
                      <th className="col-rank text-center sortable sorting_asc" tabIndex="0" style={{width: 29}} colSpan="1" rowSpan="1">#</th>

                      <th id="th-name" className="sortable sorting" tabIndex="0" style={{width: 150}} colSpan="1" rowSpan="1">Name</th>
                      <th id="th-marketcap" className="sortable text-right sorting" tabIndex="0" style={{width: 130}} colSpan="1" rowSpan="1">Market Cap</th>
                      <th id="th-price" className="ssortable text-right sorting" tabIndex="0" style={{width: 69}} colSpan="1" rowSpan="1">Price</th>
                      <th id="th-volume" className="sortable text-right sorting" tabIndex="0" style={{width: 105}} colSpan="1" rowSpan="1">Volume (24h)</th>
                      <th id="th-totalsupply" className="sortable text-right sorting" tabIndex="0" style={{width: 156}} colSpan="1" rowSpan="1">Circulating Supply</th>
                      <th id="th-change" className="sortable text-right sorting" tabIndex="0" style={{width: 109}} colSpan="1" rowSpan="1">Change (24h)</th>
                    </tr>
                  </thead>

                    <Row page={1} onTotalMarket={this.TotalUpdate.bind(this)}/>

                </table>
              </div>
            </div>
    )
    }
}
export default List;