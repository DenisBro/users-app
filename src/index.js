import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers/index';

let users = [];
for(let i=1; i<10; i++){
  users.push({
    id: i,
    username: 'John ' + i,
    job: 'Emploee ' + i,
  });
}

const initial_state = {
  users: users,
}

const store = createStore(reducers, initial_state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
