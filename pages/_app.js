import '../styles/globals.css'
import {Analytics} from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import AppContext from '../components/AppContext';
function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState('Home')
  return (
  <>
   <ThemeProvider
    defaultTheme='system'
    themes={['light','dark']}
    enableSystem={true}
    attribute="data-theme"
  >
    <AppContext.Provider value={{session, setSession}}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
    </ThemeProvider>
  </>
  );
}

export default MyApp
