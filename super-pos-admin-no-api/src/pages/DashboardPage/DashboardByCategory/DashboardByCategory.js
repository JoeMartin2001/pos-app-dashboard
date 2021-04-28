import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import SelectFoodCategory from '../../../components/SelectFoodCategory'
import DashboardByFoodBarGraph from './DashboardByFoodBarGraph'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    barGraphContainer: {
        width: '95%'
    }
}))

const DashboardByCategory = () => {
    const [foodCategory, setFoodCategory] = useState('Fast Food')
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <SelectFoodCategory food={foodCategory} setFood={setFoodCategory} />
            <div className={classes.barGraphContainer}>
                <DashboardByFoodBarGraph />
            </div>
        </div>
    )
}

export default DashboardByCategory
