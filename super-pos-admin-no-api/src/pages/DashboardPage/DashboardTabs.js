import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import DashboardAllFood from './DashboardAllFood/DashboardAllFood';
import DashboardByCategory from './DashboardByCategory/DashboardByCategory';
import DashboardByFood from './DashboardByFood/DashboardByFood';
import DashboardOrders from './DashboardOrders/DashboardOrders';
import DashboardMonthly from './DasboardMonthly/DashboardMonthly';
import { TabPanelWrapper } from '../../components/TabPanelWrapper';

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
    flex: 1
  }
}));

const DashboardTabs = () => {
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
            <Tab label={t('By order type')} {...a11yProps(0)} />
            <Tab label={t('All Orders')} {...a11yProps(1)} />
            <Tab label={t('By Order')} {...a11yProps(2)} />
            <Tab label={t('By Category')} {...a11yProps(3)} />
            <Tab label={t('Monthly')} {...a11yProps(4)} /> 
        </Tabs>
        <TabPanelWrapper value={value} index={0} className={classes.tabPanel}>
            <DashboardOrders />
        </TabPanelWrapper>
        <TabPanelWrapper value={value} index={1} className={classes.tabPanel}>
            <DashboardAllFood />
        </TabPanelWrapper>
        <TabPanelWrapper value={value} index={2} className={classes.tabPanel}>
            <DashboardByFood />
        </TabPanelWrapper>
        <TabPanelWrapper value={value} index={3} className={classes.tabPanel}>
            <DashboardByCategory />
        </TabPanelWrapper>
        <TabPanelWrapper value={value} index={4} className={classes.tabPanel}>
            <DashboardMonthly />
        </TabPanelWrapper>
    </div>
  )
}


export default DashboardTabs
