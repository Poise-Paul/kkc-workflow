import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const MainProtectedRoute = ({ component: Component, isHaveCompany: isHaveCompany, isAuthenticated: isAuthenticated, ...rest }) => {

    return (

        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return (<Redirect to={{ pathname: "/user/login", state: { from: props.location } }} />)
            }
                return (
                    <Component {...props} />
                )
        }} />
    )
}

export default MainProtectedRoute