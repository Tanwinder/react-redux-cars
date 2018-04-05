import React, { Component } from 'react';
import CarsList from './cars-list';
import CarDetail from '../components/carDetail';
import '../css/cars.css';
import InputComp from './input';

class Cars extends Component {

  render() {
    return (
      <div className="cars">
        <h1>Cars:-</h1>
        <CarsList />
        <hr/>
        <InputComp />
        <h1> Car Details</h1>
        <CarDetail />
      </div>
    )
  }
}


export default Cars;


