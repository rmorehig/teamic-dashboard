import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  // not authentication yet
  const isAuthenticated = true
  return (
    <Route
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
      {...rest}
    />
  )
}

export default PublicRoute
