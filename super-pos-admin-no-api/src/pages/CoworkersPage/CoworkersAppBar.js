import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import CoworkersCreate from './CoworkersCreate/CoworkersCreate';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  moreIcon: {
      color: theme.palette.common.white
  }
}));

const CoworkersAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton component={Link} to='/' className={classes.moreIcon}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Сотрудники
            </Typography>
            <CoworkersCreate />
          </Toolbar>
        </AppBar>
    );
}

export default CoworkersAppBar
