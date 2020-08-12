import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            raretime:0,
            button:false
        }
    }

    handleChange = ()=>{

    }

  render() {
    return <div className='backbackc'>
        <h1 className="titel">在线倒计时器</h1>
        <h1 className="titem">{this.state.raretime} Seconds</h1>
        <div className="pickers">
          <h3>设置时间</h3>
          <input type='text' className="setTime"/>
          <button className="start" onClick={this.handleChange}>{this.state.button ? 'End':'Start'}</button>
        </div>
        <a   className="starts" href='/'>回到主页</a>
    </div>

  }

  componentDidMount(){
    document.getElementById("Calculate").setAttribute("class", "headerLink");
    document.getElementById("Home").setAttribute("class", "headerLink");
    document.getElementById("Timer").setAttribute("class", "headerShow");
  }
}

export default Timer;