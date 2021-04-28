import React from 'react'
import { Route, Switch } from 'react-router'
import LoginPage from '../pages/LoginPage/LoginPage'

const AuthRouter = () => {
    return (
        <Switch>
            <Route path='/' component={LoginPage} />
        </Switch>
    )
}

export default AuthRouter
