import React, { useState, createContext } from "react"

export const LocationContext = createContext()

// This component establishes what data can be used.
export const  LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocations = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }
        /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addCustomers` function as keys. This
        allows any child addLocations to access them.
    */
   return (
    <LocationContext.Provider value={{
        locations, getLocations, addLocations
    }}>
        {props.children}
    </LocationContext.Provider>
)
}