import { GA_TRACKING_ID } from '../constants/tags'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  // try-catch avoid page load delays
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  // try-catch avoid page load delays
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    })
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

export const conversion = conversionID => {
  // try-catch avoid page load delays
  try {
    window.gtag('event', 'conversion', {
      send_to: conversionID
    })
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
