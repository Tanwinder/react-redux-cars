import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchTemp} from '../actions/weather-action';
import InputComp from '../containers/input';
import '../css/weather-app.css';

export class WeatherApp extends Component {

  constructor(props){
    super(props);
    this.cityChange = this.cityChange.bind(this);
  }
  cityChange(){
    this.props.fetchTemp(this.props.inputValue);
  }
  render() {
    const { temp,isLoading,showError,inputValue } = this.props;
  
    return (
      <div className="weather-app">
        <div>
        <InputComp />
        <button className="btn btn-weather" onClick={this.cityChange}>Get Temp</button>
        </div>
        <h2>Temperature of {inputValue }:- <span>{inputValue == '' ? '' : isLoading ? 'Loading...' :this.props.temp} </span></h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  temp: state.temp,
  isLoading: state.isLoading,
  showError: state.showError,
  inputValue: state.input
})

const mapDispatchToProps = {
  fetchTemp: fetchTemp
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherApp)
