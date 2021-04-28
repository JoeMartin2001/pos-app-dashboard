import { makeStyles } from '@material-ui/core'
import React from 'react'
import DashboardAllFoodDoughnut from './DashboardAllFoodDoughnut'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    graphContainer: {
        width: '45%',
    }
}))

const DashboardAllFood = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.graphContainer}>
                <DashboardAllFoodDoughnut />
            </div>
        </div>
    )
}

export default DashboardAllFood
