import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Layout from 'components/Layout'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true
  return (
    <Route
      render={props =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  )
}

export default PrivateRoute
