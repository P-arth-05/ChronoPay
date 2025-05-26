// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#7c3aed',         // Purple
          colorBackground: '#f5f3ff',      // Lavender background
          colorText: '#2d1a55',            // Deep purple text
          fontFamily: 'Inter, sans-serif',
          borderRadius: '8px',
        },
        elements: {
          card: 'shadow-lg border border-purple-200',
          headerTitle: 'text-purple-700',
          formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
          socialButtonsBlockButton:
            'bg-purple-100 text-purple-700 hover:bg-purple-200',
        },
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
