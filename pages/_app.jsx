import 'isomorphic-unfetch'

import App from 'next/app'
import React from 'react'
import { Global, css } from '@emotion/core'
import Router from 'next/router'


import * as gtag from '../src/vendor/gtag'
import globals from '../src/styles/globals'

import DataProvider from '../src/context/dataContext'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
      <Global styles={css(globals)} />
      <DataProvider >
        <Component {...pageProps} />
      </DataProvider>
      </>
    )
     
  }
}

export default MyApp
