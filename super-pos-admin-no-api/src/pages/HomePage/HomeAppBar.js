import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavDrawer from '../../components/NavDrawer';
import { useTranslation } from 'react-i18next';
import HomeMenuIcon from './HomeMenuIcon';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  moreIcon: {
      color: theme.palette.common.white
  }
}));

const HomeAppBar = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <AppBar position="static" color='primary'>
          <Toolbar>
            <NavDrawer />
            <Typography variant="h6" className={classes.title}>{t('Main Menu')}</Typography>
            <HomeMenuIcon />
          </Toolbar>
        </AppBar>
    );
}

export default HomeAppBar
