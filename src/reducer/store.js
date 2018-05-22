
import { createStore,applyMiddleware,compose } from 'redux';
//import createOidcMiddleware,{loadUser} from 'redux-oidc';
import reducers from './index';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory"
import {syncHistoryWithStore,routerReducer,routerMiddleware} from "react-router-redux";
import { createLogger } from 'redux-logger'


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const initialState = {};

const createStoreWithMiddleware = compose(
                    applyMiddleware(...middleware, routerMiddleware(
                      createHistory({basename : baseUrl,forceRefresh:true})))
                  )(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

export default store;
