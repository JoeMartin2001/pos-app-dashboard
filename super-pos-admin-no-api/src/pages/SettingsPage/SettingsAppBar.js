import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1,
  },
  moreIcon: {
    color: theme.palette.common.white
  }
}));

const SettingsAppBar = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton component={Link} to='/' className={classes.menuButton}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>{t('Settings')}</Typography>
            <IconButton className={classes.moreIcon}>
                <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    );
}

export default SettingsAppBar
