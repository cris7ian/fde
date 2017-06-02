import moment from 'moment'
import { Helmet } from 'react-helmet'
import React from 'react'
import FontAwesome from 'react-fontawesome'

export const Draft = ({ draft }) => (
  <div className="fde">
    <Helmet>
      <title>{`First Draft Endings: ${draft.name}`}</title>
      <meta
        property="og:image"
        content={`http://www.firstdraftendings.com/drafts/${draft.image}.jpg`}
      />
    </Helmet>

    <h2>{draft.name}</h2>
    <h4>
      {moment(draft.date, 'MM-DD-YYYY').format('MMM Do YY')}
      {' '}
      <span className="date">
        ({moment(draft.date, 'MM-DD-YYYY').fromNow()})
      </span>
    </h4>
    <div>
      <img
        className="page"
        src={`${process.env.PUBLIC_URL}/drafts/${draft.image}.jpg`}
        title={draft.caption}
        alt={draft.caption}
      />
    </div>
    <div className="links">
      <a href={draft.imdb} target="_blank" rel="noopener noreferrer">
        <FontAwesome name="ticket" />IMDB link
      </a>
    </div>
  </div>
)
