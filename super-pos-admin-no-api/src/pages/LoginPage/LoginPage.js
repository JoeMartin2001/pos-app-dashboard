import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { appColors } from '../../common/variables'
import { useAppContext } from '../../context/AppContextProvider'
import { LoginField } from './LoginField'
import { attemptLogin } from './loginQueries'
import { CustomSnackbar } from './LoginSnackbar'
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
    const { t, i18n } = useTranslation();
    const classes = useStyles()
    const { mutateAsync } = useMutation(body => attemptLogin(body))

    const [, dispatch] = useAppContext()
    const [snack, setSnack] = useState(false)
    const [snackContent, setSnackContent] = useState('')

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
        try {
            const data = await mutateAsync({login, password})
            dispatch({
                type: 'LOGIN_USER',
                payload: data._id
            })
        } catch (error) {
            setSnackContent(error.toString())
            setSnack(true)
        } 
    }

    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src="/svg/dashboard.svg" alt=""/>
                <h1 className={classes.heading_text}>Super POS Admin</h1>
            </div>
            <div className={classes.inputContainter}>
                <LoginField
                    label={t('Login')}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    margin='dense'
                    fullWidth
                    inputProps={{style: {color: 'white'}}}
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                />
                <LoginField
                    type='password'
                    label={t('Password')}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    margin='dense'
                    fullWidth
                    inputProps={{style: {color: 'white'}}}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <Button 
                    variant='contained' 
                    size='large'
                    onClick={() => handleLogin()}
                >
                    {t('Enter')}
                </Button>
            </div>
            <CustomSnackbar 
                snack={snack}
                setSnack={setSnack}
                content={snackContent}
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh',
        background: appColors.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading_text: {
        margin: '20px',
        color: 'white',
        fontFamily: 'Amsterdam',
        fontStyle: 'italic',
        fontSize: '22px',
        textAlign: 'center'
    },
    inputContainter: {
        height: '120px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}))

export default LoginPage

