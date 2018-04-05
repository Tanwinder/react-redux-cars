// import productReducer from './productsReducer';
import {combineReducers} from 'redux';
import carsReducer from './carsReducer';
import selectCarReducer from './selectCarReducer';
import {temp, isLoading, showError} from './weather-reducer';
import inputReducer from './input-reducer';

const allReducers = combineReducers({
    cars: carsReducer,
    selectCar: selectCarReducer,
    temp: temp ,
    isLoading: isLoading,
    showError: showError,
    input: inputReducer
});

export default allReducers;