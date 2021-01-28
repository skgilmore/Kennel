import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { LocationContext } from "./LocationsProvider"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

  const [location, setLocation] = useState({})

  const { locationId } = useParams();
  // how youre accesing the id you are telling application view to go get
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then((response) => {
        setLocation(response)
      })
  }, [])


const names = (array) => {
    if (array){
        return array.map((obj) => obj.name).join(",")

    }
}

const animalName = names(location.animals)
const employeeName = names(location.employees)


  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      {/* <div className="location__employeeName">Customer: {employeeName}</div>
      <div className="location__employeeName">Our Pets: {location.animalName}</div>
       */}
        <div>
        <button onClick={() => {
          history.push(`/locations/edit/${location.id}`)
        }}>Edit</button>
      </div>
    </section>
  )
}
