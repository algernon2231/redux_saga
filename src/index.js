import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import "./styles.css";

import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import reducer from './store/reducer'
import createSagaMiddleware from 'redux-saga'
import { watchAgeUp }  from './sagas/saga'

const sagaMiddleware  = createSagaMiddleware();



const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp);

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store = { store } >
<App />
</Provider>, rootElement);
