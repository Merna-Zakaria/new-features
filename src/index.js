import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from "redux";
import reducers from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import * as serviceWorker from './serviceWorker';

import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ar from 'react-intl/locale-data/ar';

addLocaleData(en);
addLocaleData(ar);

const sagaMiddleware = createSagaMiddleware();
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducers,composeEnhancers(applyMiddleware(sagaMiddleware)));
 
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>
    ,document.getElementById('root'));


serviceWorker.unregister();



