import React from 'react';
import ReactDOM from 'react-dom';
import SignInForm from './Features/SignInForm';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <SignInForm />
  </React.StrictMode>, 
  document.getElementById('root')
);

reportWebVitals();
