import { makeStyles } from '@material-ui/core'
import React from 'react'
import SettingsAppBar from './SettingsAppBar'
import SettingsMain from './SettingsMain'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh', 
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const SettingsPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <SettingsAppBar />
            <SettingsMain />
        </div>
    )
}

export default SettingsPage
