import { createContext, useState, useCallback } from 'react';

export const AppContext = createContext({
    email: '',
    isLogined: false,
    login: (token) => { },
    logout: () => { },
});

function AppProvider({ children }) {
    const [logined, setLogined] = useState(false)
    const [email, setEmail] = useState('')

    const loginHandler = (token) => {
        localStorage.setItem('email', token)
        setLogined(true)
        setEmail(token)
        console.log('logged in')
    }

    const logoutHandler = useCallback(() => {
        localStorage.removeItem('email')
        setLogined(false)
        setEmail('')
        console.log('logged out')
    }, [])

    let contextValue = {
        email: email,
        isLogined: logined,
        login: loginHandler(email),
        logout: logoutHandler(),
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider