import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  select: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    // outlineColor: theme.palette.text.primary,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function handlePaperProps(theme) {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        background: theme.palette.background.paper,
        color: theme.palette.text.primary
      },
    },
  };

  return MenuProps
}

const items = ['Fast Food', 'National', 'Dessert', 'Drink']

function getStyles(name, months, theme) {
  return {
    fontWeight:
    months.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectFoodCategory = ({food, setFood}) => {
    const [t, i18n] = useTranslation()
    const classes = useStyles();
    const theme = useTheme();
  
    const handleChange = (event) => {
      setFood(event.target.value)
    };
  
    return (
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="demo-mutiple-name-label">{t('Type of Food')}</InputLabel>
          <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value={food}
              onChange={(e) => handleChange(e)}
              input={<Input />}
              MenuProps={handlePaperProps(theme)}
              className={classes.select}
          >
              {items.map((name, i) => (
                <MenuItem key={i} value={name} style={getStyles(name, items, theme)}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
    );
}

export default SelectFoodCategory
