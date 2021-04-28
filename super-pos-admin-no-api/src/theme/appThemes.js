import { lightBlue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { appColors } from '../common/variables';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: appColors.primary,
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    // MuiPickersCalendarHeader: {
    //   switchHeader: {
    //     backgroundColor: lightBlue.A200,
    //     color: "white",
    //   },
    // },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: appColors.primary
    },
  }
});

