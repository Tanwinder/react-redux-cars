import React, { Component } from 'react';
import { connect } from 'react-redux';
import './detail.css';

export class CarDetails extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
      const {detail} = this.props;
      if(detail == null){
          return(
              <h3>Select a Car...</h3>
          )
      }
    return (
      <div className="detail-container">
        <img src={detail.img} alt="car"/>
        <h4>{detail.name}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  detail: state.selectCar
});


export default connect(mapStateToProps)(CarDetails);
