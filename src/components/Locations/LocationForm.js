import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../Locations/LocationsProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { EmployeeContext } from "../Employee/EmployeeProvider"
import "./Location.css"

export const LocationForm = () => {
    const { addLocations, getLocationById, updateLocation } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } =useContext(CustomerContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [location, setLocations] = useState({
        name: "",
        address: "",
        customerId: 0,
        locationId: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { locationId } = useParams();



    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */


    const handleControlledInputChange = (event) => {

        const newLocation = { ...location }

        newLocation[event.target.id] = event.target.value
        // update state
        setLocations(newLocation)
    }


    const handleSaveLocation = () => {
        //   event.preventDefault() //Prevents the browser from submitting the form
        if (parseInt(location.address) === 0) {
            window.alert("Please selectLocation")
        } else {
            setIsLoading(true);
            // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an location
            if (locationId) {
                //PUT - update
                updateLocation({
                    id: location.id,
                    name: location.name,
                    animalId: parseInt(location.animalId),
                    customerId: parseInt(location.customerId)
                })
                    .then(() => history.push(`/locations/detail/${location.id}`))
            } else {
                //POST - add
                addLocations({
                    name: location.name,
                    animalId: parseInt(location.animalId),
                    customerId: parseInt(location.customerId)
                })
                    .then(() => history.push("/locations"))

            }
        }
    }
    
            // Get customers and locations. If animalId is in the URL, getAnimalById
            useEffect(() => {
                getCustomers().then(getAnimals).then(() => {
                  if (locationId) {
                    getLocationById(locationId)
                    .then(location => {
                        setLocations(location)
                        setIsLoading(false)
                    })
                  } else {
                    setIsLoading(false)
                  }
                })
              }, [])
          
  
            

        return (
            <form className="locationForm">
                <h2 className="locationForm__title"> {locationId ? "Edit location" : "Add location" }</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Location Name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Location Address:</label>
                        <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
                    </div>
                </fieldset>

                <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLocation()
          }}>
        {locationId ? <>Save Location</> : <>Add Location</>}</button>

               
            </form>
        )
    
}
