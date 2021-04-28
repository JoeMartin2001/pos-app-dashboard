import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

export const CustomSnackbar = ({snack, setSnack, content}) => {
    return (
        <Snackbar open={snack} autoHideDuration={2000} onClose={() => setSnack(false)}>
            <MuiAlert elevation={6} variant="filled" onClose={() => setSnack(false)} severity='error'>
                {content}
            </MuiAlert>
        </Snackbar>
    )
}