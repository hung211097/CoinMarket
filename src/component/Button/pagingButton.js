import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Row from '../../component/Layout/row';

class Paging extends React.Component{
  handleClickNext(){
    this.props.onNextPage();
  }

  handleClickPrevious(){
    this.props.onPreviousPage();
  }

  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <ul className="pagination top-paginator">      {/*Paging Button Component--------------------------------------------*/}
            {+this.props.page > 1 ?
              <li><Link to={"/" + (+this.props.page - 1)} onClick={this.handleClickPrevious.bind(this)}>← Previous 10</Link></li>
              : null
            }
            {!this.props.lastPage ?
              <li><Link to={"/" + (+this.props.page + 1)} onClick={this.handleClickNext.bind(this)}>Next 10 →</Link></li>
               : null
            }
            <li><a href="">View All</a></li>
          </ul>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Paging;
