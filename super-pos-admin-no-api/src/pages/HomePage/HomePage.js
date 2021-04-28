import React from 'react'
import HomeAppBar from './HomeAppBar'
import { makeStyles } from '@material-ui/core';
import HomeMain from './HomeMain';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const HomePage = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <HomeAppBar />
            <HomeMain />
        </div>
    )
}

export default HomePage
