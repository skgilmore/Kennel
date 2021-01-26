import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationsProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"



export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationList: useEffect getEmployees")
        getLocations()

    }, [])
    const history = useHistory()
  

    return (
        <div>

        <button onClick={() => { history.push("/locations/create") }}>
           Add Location
         </button>

        <div className="locations">
            {console.log("LocationList: Render", locations)}
            {
                locations.map((location) => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>
        </div>
    )
}
