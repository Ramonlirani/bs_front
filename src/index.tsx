import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { Login } from './screens/Login'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
