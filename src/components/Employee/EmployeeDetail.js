import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

  const [employee, setLocation] = useState({})

  const { employeeId } = useParams();
  // how youre accesing the id you are telling application view to go get
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then((response) => {
        setLocation(response)
      })
  }, [])
  const handleSaveEmployee = () => {
    //   event.preventDefault() //Prevents the browser from submitting the form
    if (parseInt(employee.name) === 0) {
        window.alert("Please selectLocation")
    } else {
        setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an location
        if (locationId) {
            //PUT - update
            updateLocation({
                id: employee.id,
                name: employee.name,
                locationId: parseInt(employee.locationId),
                
            })
                .then(() => history.push(`/employees/detail/${employee.id}`))
        } else {
            //POST - add
            addEmployee({
                name: employee.name,
                locationId: parseInt(employee.locationId),
            })
                .then(() => history.push("/employees"))

        }
    }
}

const names = (array) => {
    if (array){
        return array.map((obj) => obj.name).join(",")

    }
}

const animalName = names(employee.animals)
const employeeName = names(employee.employees)


  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Address: {employee.location.name}</div>
      {/* <div className="location__employeeName">Customer: {employeeName}</div>
      <div className="location__employeeName">Our Pets: {employee.animalName}</div>
       */}
        <div>
        <button onClick={() => {
          history.push(`/employees/edit/${employee.id}`)
        }}>Edit</button>
      </div>
    </section>
  )
}
