import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCar } from '../actions/selectCarAction';

export class CarsList extends Component {
    constructor(props){
        super(props);
        this.carslist = this.carslist.bind(this);
        this.selectCarFunc = this.selectCarFunc.bind(this);
    }
    selectCarFunc(car){
        this.props.onSelectCar(car);
    }
    carslist(cars){
        return cars.map(car => {
            return(
            <li key={car.id} onClick={()=>this.selectCarFunc(car)}>{car.name}</li>
            );
        })
    }
    render() {
        const {cars} = this.props;
        return (
            <ul>
                {this.carslist(cars)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    cars: state.cars
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSelectCar: selectCar,
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
