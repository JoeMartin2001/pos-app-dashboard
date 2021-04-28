import { makeStyles } from '@material-ui/core'
import React from 'react'
import CoworkersItem from '../CoworkersItem'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    listWrapper: {
        padding: '2%',
        flex: 1,
    }
}))

const CoworkersCook = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.listWrapper}>
                <CoworkersItem category='cook' />
            </div>
        </div>
    )
}

export default CoworkersCook
