
const resultFunc =(result)=> {
    if(result.cod > 200) {
        return {
            type: 'isError',
            payload: 'city not found'
        }
    }
    return {
        type: 'isLoaded',
        payload: {
            temp: result.main.temp
        }
    }
}
const isLoading = (val)=> {
    return {
        type: 'isLoading',
        payload: val
    }
}

const showerror =(error)=> {
    return {
        type: 'isError',
        payload: error
    }
}

export const fetchTemp = (city) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=b9d5fbc6b5a1c8b4ee5f715112d129df`)
        .then(res => {
            
            dispatch(isLoading(false));
            return res.json();
        })
        .then(
            (result) => {
            dispatch(resultFunc(result));
            },
            (error) => {
            dispatch(showerror(error));
            }
        )
    }
}