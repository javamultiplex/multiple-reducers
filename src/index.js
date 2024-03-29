import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';
import * as serviceWorker from './serviceWorker';
const rootReducer = combineReducers({
    rA: reducerA,
    rB: reducerB
});
const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
