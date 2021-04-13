import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom'

import setupMockServer from './api/mockServer'
import UserDataContextProvider from './Context-Reducer/UserDatacontext';
import FilterContextProvider from './Context-Reducer/FilterContext';

setupMockServer()

ReactDOM.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <FilterContextProvider>
    <Router>
    <App />
    </Router>
    </FilterContextProvider>
    </UserDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
