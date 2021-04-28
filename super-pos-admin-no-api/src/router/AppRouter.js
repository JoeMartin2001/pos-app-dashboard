import React from 'react'
import { Route, Switch } from 'react-router'
import CoworkersPage from '../pages/CoworkersPage/CoworkersPage'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import FinancesPage from '../pages/FinancesPage/FinancesPage'
import HomePage from '../pages/HomePage/HomePage'
import SettingsPage from '../pages/SettingsPage/SettingsPage'

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/dashboard' component={DashboardPage} />
            <Route path='/coworkers' component={CoworkersPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route path='/finances' component={FinancesPage} />
            <Route path='/' component={HomePage} />
        </Switch>
    )
}

export default AppRouter
