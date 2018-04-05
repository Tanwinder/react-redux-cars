import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers';


const allStoreEnhancers = compose(applyMiddleware(thunk),
window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers,
{
    cars: [],
    selectCar: null
},
allStoreEnhancers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
