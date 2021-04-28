import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, makeStyles } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
        },
        '& .MuiTypography-root': {
            color: theme.palette.text.primary
        },
        '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
        },
    },   
    cssLabel: {
        color : theme.palette.text.secondary,
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.text.primary} !important`,
        },
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: `${theme.palette.text.primary} !important`
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white
    },
}))

const CoworkersCreate = () => {
    const [t] = useTranslation()
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton className={classes.menuButton} onClick={handleClickOpen}>
            <PersonAddIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
          <DialogTitle id="form-dialog-title">{t('Fill in the blank fields')}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              variant='outlined'
              margin="dense"
              id="fullName"
              label="Ф.И.О"
              type="email"
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              variant='outlined'
              margin="dense"
              id="login"
              label="Логин"
              type="email"
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              variant='outlined'
              margin="dense"
              id="password"
              label="Пароль"
              type="email"
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">{t('Cancel')}</Button>
            <Button onClick={handleClose} color="inherit">{t('Create')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default CoworkersCreate
