import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../Locations/LocationsProvider"
// import { EmployeeContext } from "../Employee/EmployeeProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import "./Location.css"

export const LocationForm = () => {
    const { addLocations } = useContext(LocationContext)
    const { locations, getLocations } = useContext(LocationContext)
    console.log(locations, "locations gotten?")
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [location, setLocations] = useState({
        name: "",
        address: "",
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
        getLocations()


    }, [])


    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    // //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
        let selectedVal = event.target.value
    //   event = what user did on page (here it would be start typing)
    // target = what you are targeting in the form here it is the VALUE element
    // cause you named it that.
    
        // /* Animal is an object with properties.
        // Set the property to the new value
        // using object bracket notation. */
        newLocation[event.target.id] = selectedVal
        // update state
        setLocations(newLocation)
    }
   

    const handleClickSaveLocation = (event) => {
        //   event.preventDefault() //Prevents the browser from submitting the form
        const locationAddress = location.address
        if (locationAddress === "") {
                window.alert("Please type a Location and an Address")
              } else {
                //invoke addAnimal passing animal as an argument.
                //once complete, change the url and display the animal list
        addLocations(location)
            .then(() => history.push("/locations"))

    }}

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
            {/* </fieldset>
            <fieldset> */}
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
                </div>
            </fieldset>

        

            <button className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                Save Location
          </button>
        </form>
    )
}

