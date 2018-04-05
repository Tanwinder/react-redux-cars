import React, { Component } from 'react';

// this component is pure react component without redux and redux-thunk

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&APPID=b9d5fbc6b5a1c8b4ee5f715112d129df")
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(
            (result) => {
                console.log(result);
            this.setState({
                isLoaded: true,
                items: result
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }
    render(){
        const { error, items, isLoaded} = this.state;
        if(error) {
            return(<div>{error}</div>)
        } else if(!isLoaded) {
            return(<div>loading...</div>)
        } else {
            return(
                <div className="container">{items.main.temp}</div>
            );
        }
    }

}

export default Weather;