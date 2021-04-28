import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, ListItemSecondaryAction, Paper, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
import CustomSpinner from '../../components/CustomSpinner';
import NetworkError from '../../components/NetworkError';
import { useTranslation } from 'react-i18next';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CoworkersDeleteActions from './CoworkersCreate/CoworkersDeleteActions';
import CoworkersEdit from './CoworkersCreate/CoworkersEdit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    overflowX: 'hidden',
    borderRadius: '5px'
  },
  accordion: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  listSubHeader: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  myIcon: {
    color: theme.palette.text.secondary
  },
  divider: {
    backgroundColor: 'lightgrey'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const CoworkersItem = ({category}) => {
    const classes = useStyles();
    const [t] = useTranslation();

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const {data, isError, error, isLoading} = useQuery(['users', category], async() => {
      const response = await fetch(`/api/auth/getUsersByRole/${category}`)
      
      if(!response.ok) {
        throw new Error('Что-то пошло не так!' + error)
      }

      return response.json()
    })

    if(isLoading) {
      return <CustomSpinner />
    }
  
    if(isError) {
      return <NetworkError />
    }
    
    return (
      <div className={classes.root}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader 
              component="div" 
              className={classes.listSubHeader}
              id="nested-list-subheader">
                {t(`List of the employees working as ${category}`)}
            </ListSubheader>
          }
        >
          {
            data.map((user) => (
              <div key={user._id}>
                <Accordion expanded={expanded === user._id} onChange={handleChange(user._id)} className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.myIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>{user.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <List component="div" disablePadding style={{width: '100%'}}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <AccountCircleIcon className={classes.myIcon}  />
                          </ListItemIcon>
                          <ListItemText primary={user.login} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <LockOpenIcon className={classes.myIcon}  />
                          </ListItemIcon>
                          <ListItemText primary={user.password} />
                        </ListItem>
                        <Divider className={classes.divider} />
                        <ListItem className={classes.nested}>
                          <ListItemIcon>
                            <CoworkersEdit />
                          </ListItemIcon>
                          <ListItemText primary={''} />
                          <ListItemSecondaryAction>
                            <CoworkersDeleteActions />
                          </ListItemSecondaryAction>
                        </ListItem>
                      </List>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          }
        </List>
      </div>
    );
}

export default CoworkersItem
