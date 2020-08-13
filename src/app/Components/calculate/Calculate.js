import React, {Component} from 'react';
import './Calculate.css';

class Calculate extends Component {
    constructor(props){
        super(props);
        this.state={
            line:'',
            number:[1,2,3,4,5,6,7,8,9,0],
            method:['+','-','*'],
            get:'='
        }
    }

    handleChange = put=>{
        this.setState({
            line: this.state.line+put
        })
    }

    handleClear = ()=>{
        this.setState({
            line: ""
        })
    }

    handleCalculate = ()=>{
        this.setState({
            line: eval(`0${this.state.line}`)
        })
    }
  render() {
    return <div className="backback">
        <h1 className="titel">在线计算器</h1>
        <div className="panel">
        <input type="text" id="line" name="line" value={this.state.line} readOnly className="shoucal"/>
        {
            this.state.method.map(option=>
                <button className="method" onClick={()=>this.handleChange(option)} key={option}>{option}</button>
            )
        }
        {
            this.state.number.map(number=>
                <button className="number" onClick={()=>this.handleChange(number)} key={number}>{number}</button>
            )
        }
        <button className="Clear" onClick={this.handleClear}>Clear</button>
        <button className="calculate" onClick={this.handleCalculate}>=</button>
        </div>
        <a href='/'>回到主页</a>
    </div>

  }

  componentDidMount(){
    document.getElementById("Calculate").setAttribute("class", "headerShow");
    document.getElementById("Home").setAttribute("class", "headerLink");
    document.getElementById("Timer").setAttribute("class", "headerLink");
  }
}

export default Calculate;