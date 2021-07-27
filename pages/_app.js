import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/Global'
import { Theme } from '../src/styles/themes/theme'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState()
  const tema = Theme

  useEffect(() => {
    setIsLogged(localStorage.getItem('Logged'))
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Header isLogged={isLogged} />
        <Component {...pageProps} isLogged={isLogged} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
