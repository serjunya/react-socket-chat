import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import './index.css';
import SearchRoomPage from './SearchRoomPage'
import ChatPage from './ChatPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='search_room' />
  },
  {
    path: 'chat',
    element: <ChatPage />
  },
  {
    path: 'search_room',
    element: <SearchRoomPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
