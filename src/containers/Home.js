import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      : 0

    const hasPrev = index < drafts.length - 1
    const hasNext = index > 0

    const Controls = props => (
      <div className="controls">
        {hasPrev &&
          <Link to={`/draft/${drafts[drafts.length - 1].title}`}>|&lt;</Link>}
        {' '}
        {hasPrev &&
          <Link to={`/draft/${drafts[index + 1].title}`}>&lt;Prev</Link>}
        {' '}
        {hasNext &&
          <Link to={`/draft/${drafts[index - 1].title}`}>Next&gt;</Link>}
        {' '}
        {hasNext && <Link to={`/draft/${drafts[0].title}`}>&gt;|</Link>}
      </div>
    )

    const Gallery = props => (
      <div>
        <Controls />
        <Draft draft={drafts[index]} />
        <Controls />
      </div>
    )

    return index !== -1 ? <Gallery /> : <Error />
  }
}
