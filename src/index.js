import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FormLogin from './componants/FormLogin';
import { Practice } from './componants/Practice';
import Pract from './componants/Pract';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId='746275054981-mnul380ivd16k553fp7u19ooirnak4f1.apps.googleusercontent.com'>
    </GoogleOAuthProvider> */}
    {/* <Pract/> */}
    {/* <FormLogin/> */}
    {/* <Practice/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
