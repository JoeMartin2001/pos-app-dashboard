import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AppContext.Provider>
)