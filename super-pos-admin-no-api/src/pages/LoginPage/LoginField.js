import { TextField, withStyles } from "@material-ui/core";

export const LoginField = withStyles({
    root: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
})(TextField);