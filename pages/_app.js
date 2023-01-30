import '../styles/globals.css'
import {Analytics} from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider
  defaultTheme='system'
  themes={['light','dark']}
  enableSystem={true}
  attribute="data-theme"
  >
    <Component {...pageProps} />
    <Analytics />
    </ThemeProvider>
  </>
  );
}

export default MyApp
