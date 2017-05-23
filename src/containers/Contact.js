import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import { Helmet } from 'react-helmet'

export const Contact = props => (
  <div>
    <Helmet>
      <title>First Draft Endings: Contact</title>
    </Helmet>
    <h2>Contact <span role="img" aria-label="hand">👋</span></h2>
    <TweetEmbed id="393489939955847169" />
  </div>
)
