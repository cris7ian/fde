import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from './containers/Home'
import { Contact } from './containers/Contact'
import { About } from './containers/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <h1>First Draft Endings</h1>
            <navigation>
              <Link to="/">Home</Link>
              {' '}
              /
              {' '}
              <Link to="/about">About</Link>
              {' '}
              /
              {' '}
              <Link to="/contact">
                Contact
              </Link>
            </navigation>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
