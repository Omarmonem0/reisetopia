import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/store';
import { fetchHotelsThunk } from './Store/searchPage/searchPageSlice';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/Error/Error';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import SearchPage from './Pages/SearchPage/SearchPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SearchPage />
      },
      {
        path: "hotels/:hotelId",
        element: <DetailsPage />,
      },
    ]
  },
]);
// get intial data
store.dispatch(fetchHotelsThunk(''))
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
