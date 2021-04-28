import { makeStyles } from '@material-ui/core'
import React from 'react'
import CoworkersAppBar from './CoworkersAppBar'
import CoworkersTabs from './CoworkersTabs'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column'
    }
}))

const CoworkersPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <CoworkersAppBar />
            <CoworkersTabs />
        </div>
    )
}

export default CoworkersPage
