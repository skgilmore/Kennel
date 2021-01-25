import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployees = customerObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getEmployees)
    }
        /*
        You return a context provider which has the
        `employees` state, `getEmployees` function,
        and the `addCustomers` function as keys. This
        allows any child addEmployees to access them.
    */
   return (
    <EmployeeContext.Provider value={{
        employees, getEmployees, addEmployees
    }}>
        {props.children}
    </EmployeeContext.Provider>
)
}