import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial Context
const initialState = {
    transactions: [
        { id: 1, item: 'Socks', amount: -25 },
        { id: 2, item: 'Buyer Client', amount: +5650 },
        { id: 1, item: 'Seller Client', amount: +10000 },
        { id: 4, item: 'Shoe Rack', amount: -65 }
    ]
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions
    }} > 
        {children} 
    </GlobalContext.Provider>
    )
}