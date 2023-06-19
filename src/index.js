import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react";
import ColourModeSwitcher from "./ColorModeSwitcher"


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme} >
      <ColourModeSwitcher/>
      <App />
    </ChakraProvider>
  </>
);

export const server = `https://api.coingecko.com/api/v3`;
