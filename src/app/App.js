import React, {Component} from 'react';
import './app.less';
import Calculate from './Components/calculate/Calculate';
import Timer from './Components/timer/Timer';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "./Home";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Routers:[{
        id:1,
        name: "Home",
        url: "/",
      },{
        id:2,
        name: "Calculate",
        url: "/calculate",
      },{
        id:3,
        name: "Timer",
        url: "/timer",
      }]
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="header">
          {
            this.state.Routers.map(router=>
              <Link id={router.name} to={router.url} key={router.id} >{router.name}</Link>
            )
          }
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calculate' component={Calculate}/>
            <Route path='/timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
