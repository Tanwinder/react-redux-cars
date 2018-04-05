import { SELECT_CAR } from '../actions/selectCarAction';

const selectCarReducer =(state=null,action)=> {
    switch(action.type) {
        case SELECT_CAR:
            return action.payload.car;
        case 'select_weather':
            return action.payload.temp;
        default:
            return state;
    }
}

export default selectCarReducer;