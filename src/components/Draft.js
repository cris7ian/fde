import moment from 'moment'
import React from 'react'

export const Draft = ({ draft }) => (
  <div className="fde">
    <h2>{draft.name}</h2>
    <h4>{moment(draft.date, 'MM-DD-YYYY').fromNow()}</h4>
    <div>
      image with caption
    </div>
    <div>
      share it
    </div>
  </div>
)
