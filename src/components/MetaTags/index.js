import React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'

import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_KEYWORDS,
  SITE_AUTHOR,
  TWITTER_HANDLE
} from '../../constants/tags'

const MetaTags = ({
  title,
  description,
  keywords,
  twitter,
  images,
  url,
  ...props
}) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      title,
      description,
      type: 'website',
      url: url,
      images: images
    }}
    twitter={{
      cardType: 'summary_large_image',
      site: '@',
      handle: TWITTER_HANDLE
    }}
    additionalMetaTags={[
      {
        name: 'keywords',
        content: keywords
      },
      {
        name: 'author',
        content: SITE_AUTHOR
      }
    ]}
    {...props}
  />
)

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string
}

MetaTags.defaultProps = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  images: [],
  url: SITE_URL
}

export default MetaTags
