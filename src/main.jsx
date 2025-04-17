import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider as Provicer } from 'react-redux';
import {store} from  './redux/store.js';
import Usercontext from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(

  <Provicer store = {store}>
    <Usercontext>

      <App />

    </Usercontext>
  </Provicer>
)
