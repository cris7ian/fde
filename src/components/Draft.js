import moment from 'moment'
import React from 'react'

export const Draft = ({ draft }) => (
  <div className="fde">
    <h2>{draft.name}</h2>
    <h4>{moment(draft.date, 'MM-DD-YYYY').fromNow()}</h4>
    <div>
      <img
        className="page"
        src={`${process.env.PUBLIC_URL}/drafts/${draft.image}.jpg`}
        alt={draft.caption}
      />
    </div>
    <div>
      share it
    </div>
  </div>
)
