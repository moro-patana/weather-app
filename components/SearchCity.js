import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function SearchCity() {
    const {searchCity, getLocationName, name, handleSelectCity, city} = useContext(Context)
    return (
        <div>
            {searchCity && 
                <div className="form-input">
                   <form className="form" onSubmit={getLocationName}>
                       <input 
                           value = {name} 
                           type="text"  
                           placeholder="i.e london" 
                           onChange={(e) => setName(e.target.value)}
                       />
                       <button className="button">Search</button>
                   </form>
                <div className="city-names">
                   {city.map(item => (<button className="cities" onClick={() => handleSelectCity(item.title)} id={item.woeid}>{item.title}</button>))}
                </div>
            </div>
}
        </div>
    )
}
