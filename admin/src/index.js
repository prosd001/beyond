import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </RecoilRoot>
);


