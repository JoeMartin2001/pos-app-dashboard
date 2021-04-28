import { makeStyles } from '@material-ui/core'
import React from 'react'
import FinancesAppBar from './FinancesAppBar'
import FinancesTabs from './FinancesTabs'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column'
    }
}))

const FinancesPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <FinancesAppBar />
            <FinancesTabs />
        </div>
    )
}

export default FinancesPage
