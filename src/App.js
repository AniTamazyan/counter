import { Component } from "react";

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      maxValue: Infinity,
      minValue: 0,
      step: 1,
    };
    this.pluse = this.pluse.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }

  pluse(){
    if (this.state.count < this.state.maxValue && (this.state.maxValue - this.state.count) > this.state.step) { 
      this.setState({
        count: this.state.count + this.state.step,
      })
    }
  }

  minus(){
    if( this.state.count > this.state.minValue && (this.state.count - this.state.step) >= this.state.minValue){
      this.setState({
        count: this.state.count -  this.state.step,
      })
    } 
  }

reset(){
  this.setState({
    count: 0,
  })
}

onChange = (e) => {
  this.setState({
    maxValue: parseInt(e.target.value),
  });
}

onStart = (e) => {
  this.setState({
    minValue: parseInt(e.target.value),
    count: parseInt(e.target.value),
  });
}

onStep = (e) => {
  this.setState({
    step: parseInt(e.target.value),
  });
}

  render() {
    const { count, isFinished, minValue } = this.state;
    return (
      <div className='main'>
        <div className='counter'>
          <button className='button' onClick={this.pluse}>+</button>
          <span>Count {count}</span>
          <button  className='button' onClick={this.minus}>-</button>
        </div>
        <button className='reset' onClick={this.reset}>Reset</button>
        <div className='inputs'>

         MaxValue
          <input className='max' onChange= {this.onChange}/>

          MinValue
          <input className='min' onChange= {this.onStart}/>

          Step
          <input className='step' onChange= {this.onStep}/>
          
        </div>
      </div>
    );
  }
}

export default App;