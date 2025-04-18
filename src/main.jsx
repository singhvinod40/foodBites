import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Usercontext from './context/UserContext.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <Usercontext>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </Usercontext>
  </Provider>

)
