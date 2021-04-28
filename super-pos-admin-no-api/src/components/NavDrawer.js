import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContextProvider';
import { useTranslation } from 'react-i18next';
import { Transition } from "react-transition-group"

const useStyles = makeStyles((theme) => ({
  container: {
  },
  list: {
    width: 250,
    height: '100%',
    backgroundColor: theme.palette.background.paper
  },
  listItemText: {
    color: theme.palette.text.primary
  },
  listItemIcon: {
    color: theme.palette.text.primary
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavDrawer = () => {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [state, setState] = useState({left: false});
    const [{}, dispatch] = useAppContext()

    const nodeRef = React.useRef(null)

    const menuItems = [
        {title: 'Dashboard', icon: 'DashboardIcon', to: '/dashboard'},
        {title: 'Finances', icon: 'MonetizationOnIcon', to: '/finances'},
        {title: 'Coworkers', icon: 'SupervisedUserCircleIcon', to: '/coworkers'},
        {title: 'Settings', icon: 'SettingsIcon', to: '/settings'},
    ]

    const handleIcon = (icon) => {
        switch (icon) {
            case 'ExitToAppIcon':
                return <ExitToAppIcon />
            case 'SupervisedUserCircleIcon':
                return <SupervisedUserCircleIcon />
            case 'SettingsIcon':
                return <SettingsIcon />
            case 'DashboardIcon':
                return <DashboardIcon />
            case 'MonetizationOnIcon':
                return <MonetizationOnIcon />
            default:
                return <ContactSupportIcon />
        }
    }
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            {menuItems.map((item, index) => (
                <ListItem button key={item.title} component={Link} to={item.to} className={classes.listItemText}>
                    <ListItemIcon className={classes.listItemIcon}>{handleIcon(item.icon)}</ListItemIcon>
                    <ListItemText primary={t(item.title)} />
                </ListItem>
            ))}
            <Divider />
            <ListItem button key={'Выйти'} onClick={() => dispatch({type: 'LOGOUT_USER'})} className={classes.listItemText}>
                <ListItemIcon className={classes.listItemIcon}>{handleIcon('ExitToAppIcon')}</ListItemIcon>
                <ListItemText primary={'Выйти'} />
            </ListItem>
        </List>
      </div>
    );
  
    return (
      <Transition nodeRef={nodeRef} in timeout={200} classnames="fade">
        <div ref={nodeRef} className={classes.container}>
          <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" aria-label="menu"  
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
        </div>
      </Transition>
    );
}

export default NavDrawer
