const inputResult = (val)=>{
    console.log(val);
    return {
        type: 'input_value',
        payload: {
            value: val
        }
    }
}
export const inputValue =(val)=> {
    
    return (dispatch) => {
        dispatch(inputResult(val))
    }
}