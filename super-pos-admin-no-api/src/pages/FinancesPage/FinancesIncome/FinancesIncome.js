import { makeStyles } from '@material-ui/core'
import React from 'react'
import FinancesIncomeBody from './FinancesIncomeBody'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        height: '10%',
        borderBottom: '1px solid lightgrey'
    },
    body: {
        flex: 1,
        padding: '2%'
    }
}))

const FinancesIncome = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.header}>

            </div>
            <div className={classes.body}>
                <FinancesIncomeBody />
            </div>
        </div>
    )
}

export default FinancesIncome
