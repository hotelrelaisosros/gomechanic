import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App is not used in router currently, but kept for reference or if user wants it back
// import App from './App.tsx'
import { RouterProvider } from "react-router";
import appRouter from "./navigation/AppRouter.tsx";
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)

