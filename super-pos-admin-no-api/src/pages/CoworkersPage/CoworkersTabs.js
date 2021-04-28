import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import { TabPanelWrapper } from '../../components/TabPanelWrapper';
import CoworkersMain from './CoworkersMain';
import CoworkersWaiter from './CoworkersWaiter/CoworkersWaiter';
import CoworkersCook from './CoworkersCook/CoworkersCook';
import CoworkersCashier from './CoworkersCashier/CoworkersCashier';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flex: 1,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    width: '200px'
  },
  tabPanel: {
    flex: 1,
    backgroundColor: theme.palette.background.default
  }
}));

const CoworkersTabs = () => {
    const [t] = useTranslation()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
          >
              <Tab label={t('Waiters')} {...a11yProps(0)} />
              <Tab label={t('Cooks')} {...a11yProps(1)} />
              <Tab label={t('Cashiers')} {...a11yProps(2)} />
          </Tabs>
          <TabPanelWrapper value={value} index={0} className={classes.tabPanel}>
                <CoworkersWaiter />
          </TabPanelWrapper>
          <TabPanelWrapper value={value} index={1} className={classes.tabPanel}>
                <CoworkersCook />
          </TabPanelWrapper>
          <TabPanelWrapper value={value} index={2} className={classes.tabPanel}>
                <CoworkersCashier />
          </TabPanelWrapper>
      </div>
    )
}

export default CoworkersTabs
