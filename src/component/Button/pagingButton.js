import React from 'react';
import ReactDOM from 'react-dom';
  handleClickNext(){

  handleClickPrevious(){
    this.props.onPreviousPage();
  }

  return(
    <ul className="pagination top-paginator">      {/*Paging Button Component--------------------------------------------*/}
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <ul className="pagination top-paginator">      {/*Paging Button Component--------------------------------------------*/}
            {+this.props.page > 1 ?
              <li><Link to={"/" + (+this.props.page - 1)} onClick={this.handleClickPrevious.bind(this)}>← Previous 10</Link></li>
              : null
            }
            <li><Link to={"/" + (+this.props.page + 1)} onClick={this.handleClickNext.bind(this)}>Next 10 →</Link></li>
      <li><a href="">View All</a></li>
    </ul>
  );
}

export default Paging;
