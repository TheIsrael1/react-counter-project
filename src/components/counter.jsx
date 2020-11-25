import React, { Component } from 'react';

class Counter extends Component {

 componentDidUpdate(prevProps, prevState) {
  console.log(prevProps, 'prevProps');
  console.log(prevState, 'prevState');

 }

 componentWillUnmount() {
  console.log('Counter - Unmount');
 }

 render() {
  // console.log('props', this.props);
  return (
   <div className="row ">
    <div className="col-1 mr-2 ">
     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    </div>
    <div className="col">
     <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm mr-2">+</button>
     <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.formatButton()}>-</button>
     <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x

    </button>

    </div>
   </div>
  );
 }


 getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += (this.props.counter.value === 0) ? "warning" : "primary";
  return classes;
 }

 formatButton() {
  let classes = "btn btn-sm btn-secondary "
  classes += (this.props.counter.value === 0) ? "disabled" : "";
  return classes;
 }

 formatCount() {
  const { value } = this.props.counter;
  return value === 0 ? 'zero' : value;
 }
}

export default Counter;