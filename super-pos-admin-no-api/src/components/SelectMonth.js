import React, { useState } from 'react';
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
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  select: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.text.primary}`
    // outlineColor: theme.palette.text.primary,
  }
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function getStyles(name, months, theme) {
  return {
    fontWeight:
    months.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectMonth = ({monthX, setMonthX}) => {
    const [t, i18n] = useTranslation()
    const classes = useStyles();
    const theme = useTheme();
  
    const handleChange = (event) => {
        const idx = months.findIndex((m) => m === event.target.value)
        setMonthX(idx)
    };
  
    return (
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="demo-mutiple-name-label">{t('Month')}</InputLabel>
          <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value={months[monthX]}
              onChange={(e) => handleChange(e)}
              input={<Input />}
              MenuProps={handlePaperProps(theme)}
              className={classes.select}
          >
              {months.map((name, i) => (
                <MenuItem key={i} value={name} style={getStyles(name, months, theme)}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
    );
}

export default SelectMonth
