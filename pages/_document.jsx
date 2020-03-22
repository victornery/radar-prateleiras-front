import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../src/constants/tags'

import MetaTags from '../src/components/MetaTags/'

export default class extends Document {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/html-has-lang
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
          
          <MetaTags />
           <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          /> 
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          /> 
  

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
