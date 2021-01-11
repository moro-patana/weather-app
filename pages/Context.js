import React from 'react'
const Context = React.createContext()
export default function ContextProvider({children}) {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
