import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    langBtn: {
        color: theme.palette.text.primary,
    },
    langText: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        "&:hover": {
            backgroundColor: "lightgrey !important"
        }
    },
}))

const SettingsLangMenu = () => {
    const classes = useStyles()
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleLangSelect = (lng) => {
        i18n.changeLanguage(lng)
        setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.langBtn}>
          {i18next.language}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
            {
                i18next.languages.map((l, i) => (
                    <MenuItem className={classes.langText} onClick={() => handleLangSelect(l)} key={i}>{l}</MenuItem>
                ))
            }
        </Menu>
      </div>
    );
}

export default SettingsLangMenu
