export function temp(state = 30, action) {
    switch(action.type){
        case 'isLoaded':
            return action.payload.temp;
        default: 
            return state;
    }
}
export function isLoading(state = true, action) {
    switch(action.type){
        case 'isLoading':
            return action.payload;
        default: 
            return state;
    }
}
export function showError(state = null, action) {
    switch(action.type){
        case 'isError':
            return action.payload;
        default: 
            return state;
    }
}