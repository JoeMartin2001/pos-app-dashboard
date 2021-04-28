import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import SelectOrderType from '../../../components/SelectOrderType'
import DashboardOrdersLineGraph from './DashboardOrdersLineGraph'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    lineWrapper: {
        width: '90%'
    },
    selectFoodTypeContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

const DashboardOrders = () => {
    const classes = useStyles()
    const [foodType, setFoodType] = useState('Eat-in')

    return (
        <div className={classes.container}>
            <div className={classes.selectFoodTypeContainer}>
                <SelectOrderType food={foodType} setFood={setFoodType} />
            </div>
            <div className={classes.lineWrapper}>
                <DashboardOrdersLineGraph />
            </div>
        </div>
    )
}

export default DashboardOrders
