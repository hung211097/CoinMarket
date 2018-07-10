import React, { Component } from 'react';
import Home from './home';
import CheckExistPage from '../../services/checkExistPage';
import ErrorPage from '../Error/error';

var reg = /^\d+$/;

class CoinMarket extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
       p : this.props.page,
       last : false,
       error: false,
       loading: true,
       flag: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(+nextProps.page !== +prevState.p)
    {
      return{
        p: nextProps.page,
        last: false,
        error: false,
        loading: true,
        flag: true
      }
    }

    return null;
  }

  componentDidUpdate()
  {
    if(this.state.flag)
    {
      CheckExistPage(+this.state.p).then((flag1) =>{
        this.setState({
          error: !flag1,
          flag: false
        });
      }).then(() => {

        CheckExistPage(+this.state.p + 1).then((flag2) => {
          this.setState({
            last: !flag2,
          });
        });

      });
    }
  }

  componentDidMount()
  {
    CheckExistPage(+this.state.p).then((flag1) =>{
      this.setState({
        error: !flag1,
        flag: false
      });
    }).then(() => {

      CheckExistPage(+this.state.p + 1).then((flag2) => {
        this.setState({
          last: !flag2,
          loading: false
        });
      });

    });
  }


  render(){
    if(this.state.loading)
      return(
        <div className="container">
          <div className="se-pre-con">
          </div>
        </div>
      );

    return(
      <div className="container">
        {this.state.error ?
          <ErrorPage />
          :
          <Home page={this.state.p} lastPage={this.state.last}/>
        }
      </div>
    );
  }
}

const App = (props) => {
  let p = props.match.params.page;
  if(!p)
    p = 1;
  else
    if(!reg.test(p))
      return (<ErrorPage />);

  return(
    <CoinMarket page={+p}/>
  );
}

export default App;
