import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './redux/context';
import Auth from './service/auth';
import Service from './service/restService';
const user = new Auth();
const rest = new Service();
const service = {
  user,
  rest
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <User.Provider value={service}>
        <App />
      </User.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
