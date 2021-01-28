import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"
import { LocationProvider } from "./LocationsProvider"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
        <Link to={`/locations/detail/${location.id}`}>
          { location.name }
        </Link>
        </h3>
        <div className="location__address">{location.address}</div>
        <div className="location__numberOfAnimals"> {location.animals.length} animals</div>
            <div className="location__numberOfEmployees">{location.employees.length} employees</div>

    </section>
)

// create a fetch call and fnct to create updateLocations
// fetch call should look for detail by location.id
// allow that function/info to be viewable to other components by adding it to the provider
// and the props.children comp
// create a route in app.Views to path to updateLocations
// add the "html" rep of a button to edit locations in LocationsDetails
// Rework the location form component :
// // Component loads and renders - Save button should be disabled since the data is not available yet.
// 1)useEffect() invoked. For the dropdowns get data for locations and customers.
// 2)Determine if this is an edit based on animalId in the URL. If true, invoke getAnimalById() and then setAnimal state
// 3)Render (display new state in DOM)
// 4)User makes changes. As changes are made, state is updated. The DOM always displays what is in state.
// 5)Select Save
// 6)Invoke handleSaveAnimal(). This functions determines if this is a new animal or edit, prepares an object with the animal data and invokes the appropriate provider method (addAnimal or updateAnimal).
// 7)The handleSaveAnimal method will also setIsLoading(true) - this ensures the user cannot repeatedly click the button while the API is being updated.
// 8)Once the API has updated, change the view to display updated data