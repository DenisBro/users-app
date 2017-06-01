import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './stylesheets/main.css';
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
  users:{
        list: users,
        }
}

const store = createStore(reducers, initial_state);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
