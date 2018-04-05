import React, { Component } from 'react';
import { connect } from 'react-redux';
import {inputValue} from '../actions/input-change';

export class InputComp extends Component {
  constructor(props){
      super(props);
      this.inputValue=this.inputValue.bind(this);
  }
inputValue(e){
    this.props.inValue(e.target.value);
}
  render() {
    return (
        <div>
            <input value={this.props.value} onBlur={(event)=> this.inputValue(event)}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inVal: state.input
})

const mapDispatchToProps = {
  inValue : inputValue
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComp)
