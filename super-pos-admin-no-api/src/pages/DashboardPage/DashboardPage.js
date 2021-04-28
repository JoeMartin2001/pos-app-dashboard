import { makeStyles } from '@material-ui/core'
import React from 'react'
import DashboardAppBar from './DashboardAppBar'
import DashboardTabs from './DashboardTabs'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column'
    }
}))

const DashboardPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <DashboardAppBar />
            <DashboardTabs />
        </div>
    )
}

export default DashboardPage
