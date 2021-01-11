import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function SearchCity() {
    const {query, setQuery, SearchCity} = useContext(Context)
    return (
        <div>
        <form className="form" onSubmit={SearchCity}>
            <input 
                value = {query} 
                type="text"  
                placeholder="i.e london" 
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button">Search</button>
        </form>

        </div>
    )
}
