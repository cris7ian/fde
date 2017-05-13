import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Home } from './containers/Home'
import { Contact } from './containers/Contact'
import { About } from './containers/About'
import { Error } from './components/Error'

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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/draft/:title" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </div>
            <div className="footer">
              <hr />
              <i>First Draft Endings</i> by Cristian E. Caroli.
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
