import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {


  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (<div>
      <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">Reset</button>
      {this.props.counters.map(counter =>
        <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} counter={counter} />)}
    </div>);
  }
}

export default Counters;