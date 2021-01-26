import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"



export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeeContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EmployeeList: useEffect getEmployees")
        getEmployees()

    }, [])
  

    const history = useHistory()
    return (
        <div className="employees">
            <div>
        <button onClick={() => { history.push("/employees/create") }}>
        New Employee
      </button>
     
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
        </div>
    )
}


