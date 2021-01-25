import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, owner, location }) => (
    <section className="animal">
        <h2>Animals:</h2>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal_name">{animal.breed}</div>
        <address className="location__address">{animal.location.name}</address>   
        <div className="customer__name">{owner.name}</div>
    </section>
)

