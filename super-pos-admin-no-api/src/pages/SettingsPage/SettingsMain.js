import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContextProvider';
import SettingsLangMenu from './SettingsLangMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.palette.background.default,
  },
  listItem: {
      color: theme.palette.text.primary
  },
  listItemIcon: {
      color: theme.palette.text.primary
  },
  themeSwitch: {
    // '& .Mui-checked': {
    //   color: '#109125',
    //   transform:'translateX(25px) !important'
    // },
    '& .MuiSwitch-track': {
        backgroundColor:'red'
    }
  }
}));

const SettingsMain = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [{isDark}, dispatch] = useAppContext()
    const [checked, setChecked] = React.useState(['wifi']);
  
    return (
      <List className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <Brightness4Icon className={classes.listItemIcon} />
          </ListItemIcon>
          <ListItemText id="switch-night-mode" primary={t('Dark Mode')} className={classes.listItem} />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              className={classes.themeSwitch}
              onChange={() => dispatch({type: 'toggleDarkMode'})}
              checked={isDark}
              inputProps={{ 'aria-labelledby': 'switch-night-mode' }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LanguageIcon className={classes.listItemIcon} />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary={t('Language')} className={classes.listItem} />
          <ListItemSecondaryAction>
            <SettingsLangMenu />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
}

export default SettingsMain
