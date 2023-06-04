import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { store } from './app/Store.ts';
import './index.css'
import './App.css'

import Index from './scenes/index.tsx';
import Root from './scenes/root/index.tsx';
import Gallery from './scenes/gallery/index.tsx';
import ErrorPage from './ErrorPage.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "gallery",
        element: <Gallery />,
      }
    ]
  }
])

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      {/*<App />*/}
    </Provider>
  </React.StrictMode>
)
