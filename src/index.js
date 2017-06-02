import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory'

import './stylesheets/main.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers/index';

let users = [];
for(let i=1; i <= 28; i++){
  users.push({
    id: i,
    username: 'John ' + i,
    job: 'Emploee ' + i,
  });
}

const initial_state = {
  users:{
        list: users
      }
};
const history = createHistory();
let middleware = applyMiddleware(routerMiddleware(history));
if(process.env.NODE_ENV !== 'production'){
  middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history)));
}
const store = createStore(reducers, initial_state, middleware);

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
