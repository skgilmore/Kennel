import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

    const {animalId} = useParams();
    // how youre accesing the id you are telling application view to go get

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])

    const history = useHistory()

const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animals")
      })
  }

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? it allows the response to not exisit and
      not break the app. show it if its there if its not there just leave blank*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <div>
      <button onClick={handleRelease}>Release Animal</button>
      </div>
    </section>
  )
}