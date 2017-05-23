import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export class Contact extends Component {
  componentDidMount() {
    window.twttr.widgets.load()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>First Draft Endings: Contact</title>
        </Helmet>
        <h2>Contact <span role="img" aria-label="hand">👋</span></h2>
        <blockquote className="twitter-tweet" data-lang="en">
          <p lang="no" dir="ltr">Hello, stranger.</p>
          — Cristian™
          {' '}
          <span role="img" aria-label="logo">🍥</span>
          {' '}
          (@cris7ian)
          {' '}
          <a href="https://twitter.com/cris7ian/status/393489939955847169">
            October 24, 2013
          </a>
        </blockquote>
      </div>
    )
  }
}
