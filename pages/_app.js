import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import theme from './temaConfig'
import GlobalContext from '../context/GlobalContext'

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Vagas</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <GlobalContext>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </GlobalContext>
      </React.Fragment>
    );
  }
}