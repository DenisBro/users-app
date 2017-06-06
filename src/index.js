import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { sagas } from './sagas/index';

import './stylesheets/main.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers/index';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
let middleware = applyMiddleware(routerMiddleware(history),sagaMiddleware);
if(process.env.NODE_ENV !== 'production'){
  middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history),sagaMiddleware));
}
const store = createStore(reducers, middleware);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <div>
        <App/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
