import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAppContext } from '../context/AppContextProvider'
import AppRouter from './AppRouter'
import AuthRouter from './AuthRouter'

const RouteInitializer = () => {
    const [{userId}, dispatch] = useAppContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const idx = localStorage.getItem('userId')
        
        if(idx) {
            dispatch({
                type: 'LOGIN_USER',
                payload: idx
            })
        }

        setLoading(false)
    }, [dispatch])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <BrowserRouter>
            {userId ? <AppRouter /> : <AuthRouter />}
        </BrowserRouter>
    )
}

export default RouteInitializer
