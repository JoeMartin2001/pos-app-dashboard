import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeLineGraph from './HomeLineGraph'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        flex: 1,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingContainer: {
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    heading: {
        fontStyle: 'italic',
        fontSize: '25px',
        fontWeight: '600',
        color: theme.palette.text.primary
    },
    chart_container: {
        height: '85%',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const HomeMain = () => {
    const {t, i18n} = useTranslation()
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.headingContainer}>
                <p className={classes.heading}>{t('Recent line graph of the last week')}</p>
            </div>
            <div className={classes.chart_container}>
                <HomeLineGraph />
            </div>
        </div>
    )
}

export default HomeMain
