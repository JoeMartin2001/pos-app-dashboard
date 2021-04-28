import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SelectMonth from '../../../components/SelectMonth'
import DashboardGeneralLineGraph from './DashboardGeneralLineGraph'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2%',
        overflowY: 'auto',
    },
    selectMonthContainer: {
        height: '10%',
        width: '50%',
        marginBottom: '3%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontStyle: 'italic',
        fontSize: '25px',
        fontWeight: '600',
        color: theme.palette.text.primary,
        marginBottom: '3%',
        textAlign: 'center'
    },
    chartContainer: {
        height: '70%',
        width: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

const DashboardGeneral = () => {
    const [t] = useTranslation()
    const classes = useStyles()
    const [monthX, setMonthX] = useState(new Date().getMonth());

    return (
        <div className={classes.container}>
            <div className={classes.selectMonthContainer}>
                <p className={classes.heading}>{t('Visualized monthly overview of sales')}</p>
                <SelectMonth monthX={monthX} setMonthX={setMonthX} />
            </div>
            <div className={classes.chartContainer}>
                <DashboardGeneralLineGraph />
            </div>
        </div>
    )
}

export default DashboardGeneral
