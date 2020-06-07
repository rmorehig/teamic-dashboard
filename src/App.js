import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Dashboard from 'views/Dashboard'
import PrivateRoute from 'routes/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/teams" component={Dashboard} />
        <PrivateRoute exact path="/teams/:id" component={Dashboard} />
        <PrivateRoute exact path="/projects" component={Dashboard} />
        <PrivateRoute exact path="/projects/:id" component={Dashboard} />
        <PrivateRoute exact path="/integrations" component={Dashboard} />
        <PrivateRoute exact path="/integrations/:id" component={Dashboard} />
        <PrivateRoute exact path="/inbox" component={Dashboard} />
        <PrivateRoute exact path="/tasks" component={Dashboard} />
        <PrivateRoute exact path="/conversations" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  )
}

export default App
