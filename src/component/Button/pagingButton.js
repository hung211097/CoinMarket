import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Row from '../../component/Layout/row';

class Paging extends React.Component{
  handleClick(){
    this.props.onNextPage();
  }

  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <ul className="pagination top-paginator">      {/*Paging Button Component--------------------------------------------*/}
            <li><Link to={"/" + (+this.props.page + 1)} onClick={this.handleClick.bind(this)}>Next 10→</Link></li>
            <li><a href="">View All</a></li>
          </ul>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Paging;
