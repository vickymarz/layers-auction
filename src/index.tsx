import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
