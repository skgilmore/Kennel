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
    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_embed=locations&_embed=animals`)
            .then(res => res.json())
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
    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/locations/${employee.id}?_embed=locations&_embed=animals"`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(employee)
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
        employees, getEmployees, addEmployees, updateEmployee, getEmployeeById
    }}>
        {props.children}
    </EmployeeContext.Provider>
)
}