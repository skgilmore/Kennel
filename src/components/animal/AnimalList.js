import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../Locations/LocationsProvider"

// useContext and useEffect are HOOKS
// useContext lets you use data structures and functions that
//  a parent provider component exposes. you must import the context obj
// AnimalContext, so you can access the obj it exposes
// The useEffect hook allows the component to reach out into the
//  world for anything that cannot
//  be handled during render. In this case, it is the API call for the animals.



export const AnimalList = () => {

    // This state changes when `getAnimals()` is invoked below
    // Be careful setting state within the useEffect. State changes cause 
    // a re-render. Re-render can invoke useEffect (depending on the dependency 
    //     array values). This would result in an infinate loop. 
    // Also other areas need this state change info!

    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
   
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    }, [])

    return (
            <div>

             <button onClick={() => { history.push("/animals/create") }}>
                Add Animal
              </button>

        <div className="animals">
            {/* <h2>Animals</h2> */}
            {
                animals.map(animal => {
                    const owner = customers.find(c => c.id === animal.customerId)
                    return <AnimalCard key={animal.id} animal={animal} owner={owner} />
                })
            }
        </div>
        </div>
    )
    //  <Animal key={animal.id} animal={animal} />)}
}






    // useEffect is kinda like asycronaus java bc its a callback function
    // its  function holds a value that is a function
    // similar to .then in weather in holiday world




// line 16: you are returning an array of objects so that you can use the .map function
// that is a method used on an array.

// The dependency array. Logic within functions only occur when a function is invoked. Within 
// a React component, useEffect is a function. After the return, useEffect is 
// automatically invoked and since the dependency array is empty, it only runs the
//  first time the component renders.


// Use the .map() array method to iterate the array of animals and
//  generate HTML for each one by invoking the AnimalCard component function.