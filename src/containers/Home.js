import React, { Component } from 'react'
import './Home.css'
import findIndex from 'lodash/findIndex'
import { drafts } from '../db.json'
import { Draft } from '../components/Draft'
import { Error } from '../components/Error'

export class Home extends Component {
  render() {
    const title = this.props.match.params.title
    const index = title
      ? findIndex(drafts, item => item.title === this.props.match.params.title)
      : drafts.length - 1

    const Gallery = props => (
      <div>
        <div className="controls">
          <a>|&lt;</a> <a>&lt;Prev</a> <a>Next&gt;</a> <a>&gt;|</a>
        </div>
        <Draft draft={drafts[index]} />
      </div>
    )

    return index !== -1 ? <Gallery /> : <Error />
  }
}
