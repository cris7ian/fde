import React from 'react'
import { Helmet } from 'react-helmet'
import FontAwesome from 'react-fontawesome'

export const About = props => (
  <div>
    <Helmet>
      <title>First Draft Endings: About this Project</title>
    </Helmet>
    <h2>About this Project 📓</h2>
    <p>
      All and all, <i>First Draft Endings</i>
      is a project conceived by me,
      {' '}
      <a target="_blank" href="http://www.cristiancaroli.com">
        Cristian E. Caroli
      </a>
      .
    </p>
    <p>
      Think of this as a satiric screenplay comic.
    </p>
    <p>
      I follow a fixed set of rules:
    </p>
    <ul>
      <li>Each <i>FDE</i> has to end the story.</li>
      <li>A single page.</li>
      <li>No outside feedback before posting.</li>
      <li>
        No duplicates. Once a story gets a <i>FDE</i>, it won't get another one.
      </li>
      <li>No TV.</li>
      <li>A % of the script comes from the original.</li>
    </ul>
    <p>
      One last thing, if there's something you don't like, feel free to
      {' '}
      <a href="https://github.com/cris7ian/fde">
        {' '}<FontAwesome name="github" /> implement it
      </a>
      .
    </p>
    <p>
      Enjoy.
    </p>
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
      <img
        alt="Licencia Creative Commons"
        style={{ borderWidth: 0 }}
        src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
      />
    </a>
  </div>
)
