import React from 'react'

const Error = ({ statusCode }) => (
  <p>
    {statusCode === 404
      ? '404 not found. (╯°□°)╯︵ ┻━┻'
      : 'An error occurred'}
  </p>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
