import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const AnimalCard = ({ animal, owner, location }) => (
    <section className="animal">
        <h2>Animals:</h2>
        <Link to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal_name">{animal.breed}</div>
    </section>
)

