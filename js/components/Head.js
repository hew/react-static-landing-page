
import React from 'react'

const Head = ({ title, css }) => (
  <head>
    <meta charSet='utf-8' />
    <title>{title}</title>
    <link href='css/normalize.css' rel='stylesheet' />
    <link href='https://unpkg.com/basscss@8.0.0/css/basscss.min.css' rel='stylesheet' />
    <link href='css/index.css' rel='stylesheet' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </head>
)

export default Head
