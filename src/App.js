import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Dashboard from 'views/Dashboard'
import PrivateRoute from 'routes/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  )
}

export default App
