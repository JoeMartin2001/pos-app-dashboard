import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import SelectFood from '../../../components/SelectFood'
import DashboardByFoodLineGraph from './DashboardByFoodLineGraph'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    lineContainer: {
        width: '90%'
    },
    selectFoodContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

const DashboardByFood = () => {
    const classes = useStyles()
    const [food, setFood] = useState('Lavash')

    return (
        <div className={classes.container}>
            <div className={classes.selectFoodContainer}>
                <SelectFood food={food} setFood={setFood} />
            </div>
            <div className={classes.lineContainer}>
                <DashboardByFoodLineGraph />
            </div>
        </div>
    )
}

export default DashboardByFood
