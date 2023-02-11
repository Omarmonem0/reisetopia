import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/store';
import { fetchHotelsThunk } from './Store/searchPage/searchPageSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// intial loading
store.dispatch(fetchHotelsThunk(''))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
