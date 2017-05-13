import moment from 'moment'
import React from 'react'
import FontAwesome from 'react-fontawesome'

export const Draft = ({ draft }) => (
  <div className="fde">
    <h2>{draft.name}</h2>
    <h4>{moment(draft.date, 'MM-DD-YYYY').fromNow()}</h4>
    <div>
      <img
        className="page"
        src={`${process.env.PUBLIC_URL}/drafts/${draft.image}.jpg`}
        title={draft.caption}
        alt={draft.caption}
      />
    </div>
    <div className="links">
      <a href={draft.imdb} target="_blank">
        <FontAwesome name="ticket" />IMDB link
      </a>
    </div>
  </div>
)
