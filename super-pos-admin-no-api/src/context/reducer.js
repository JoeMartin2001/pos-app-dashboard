export const initialState = {
    userId: null,
    isDark: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            localStorage.setItem('userId', action.payload)
            return {
                ...state,
                userId: action.payload
            }
        case 'LOGOUT_USER':
            localStorage.removeItem('userId')
            return {
                ...state,
                userId: null
            }
        case 'toggleDarkMode': 
            console.log(state)
            return {
                ...state,
                isDark: !state.isDark
            }
        default:
            break;
    }
}