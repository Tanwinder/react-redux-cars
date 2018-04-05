export default function(state = '',action){
    switch(action.type){
        case 'input_value':
        return action.payload.value;
        default:
        return state;
    }
}