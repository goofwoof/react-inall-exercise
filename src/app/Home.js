import React, {Component} from 'react';
import homeIcon from '../images/hero-image.png'
import calcuIcon from '../images/calculator.png'
import timeIcon from '../images/timer.png'
import './Home.css';

class Home extends Component {
  render() {
    return <div>
        <img src={homeIcon} alt="" />
        <div className="cal">
          <img src={calcuIcon} alt="" height="100" width="100"/>
          <a className="low" href="/calculate">计算器</a>
        </div>
        <div className="tim">
          <img src={timeIcon} alt="" height="100" width="100"/>
          <a  className="low" href="/timer">倒计时器</a>
        </div>

    </div>

  }

  componentDidMount(){
    document.getElementById("Calculate").setAttribute("class", "headerLink");
    document.getElementById("Home").setAttribute("class", "headerShow");
    document.getElementById("Timer").setAttribute("class", "headerLink");
  }
}

export default Home;