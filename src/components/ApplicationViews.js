import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { LocationProvider } from "./Locations/LocationsProvider"
import { LocationList } from "./Locations/LocationsList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeForm } from "./Employee/EmployeeForm"
import { LocationForm } from "./Locations/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./Locations/LocationDetail"


// dynamic route- : = placeholder for whats coming in
// what youre looking for
// (\d+) = symbol to accept any digit and any length of digits



export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>
                            <Route exact path="/locations/edit/:locationId(\d+)">
                                <LocationForm />
                            </Route>
                            <Route exact path="/locations/create">
                                <LocationForm />
                            </Route>
                            <Route path="/locations/detail/:locationId(\d+)">
                                <LocationDetail />
                            </Route>

                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>
                            <Route path="/employees/edit/:employeeId(\d+)">
                                <EmployeeForm />
                            </Route>
                            <Route path="/employees/detail/:employeeId(\d+)">
                                <EmployeeForm />
                            </Route>

                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>
                            <Route exact path="/locations">
                                <LocationList />
                            </Route>

                            <Route exact path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>
                        </EmployeeProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            <LocationProvider>
            </LocationProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>

            </EmployeeProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

        </>
    )
}

{/* <AnimalProvider>
<Route path="/animals">
    <AnimalList />
</Route>
</AnimalProvider> */}