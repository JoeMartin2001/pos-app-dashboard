import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, makeStyles } from '@material-ui/core';
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
    myIcon: {
        color: theme.palette.text.secondary
    },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CoworkersDeleteActions = () => {
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
        <IconButton edge="end" aria-label="delete" className={classes.myIcon} onClick={handleClickOpen}>
            <DeleteForeverIcon />
        </IconButton>
        <Dialog
          className={classes.root}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{t('Are you sure?')}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">{t('Do you really want to delete the user?')}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">{t('Cancel')}</Button>
            <Button onClick={handleClose} color="inherit">{t('Create')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default CoworkersDeleteActions
