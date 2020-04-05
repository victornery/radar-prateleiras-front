import 'isomorphic-unfetch'
import App from 'next/app'
import React from 'react'
import { Global, css } from '@emotion/core'
import { withTheme, ThemeProvider } from 'emotion-theming'
import Router from 'next/router'

import * as gtag from '../src/vendor/gtag'
import DataProvider from '../src/context/dataContext'
import cssBase from "../src/styles/globals";
import siteTheme from "../src/styles/theme";

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={ cssBase(theme) } />
))

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <DataProvider >
          <ThemeProvider theme={siteTheme} >
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </DataProvider>
      </>
    )
  }
}

export default MyApp
