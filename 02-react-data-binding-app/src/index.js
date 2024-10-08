import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataBindingComponent from "./component/DataBindingComponent";
import BindingCollection from "./component/BindingCollection";
import DataBindingg from "./component/databindingComponentTwo";
import OneWayBinding from './component/Binding';
import Statebinding from './component/withoutvariablebinding';
import FetchAPI from './component/fetchdatawithapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchAPI/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
