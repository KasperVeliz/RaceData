import { useState } from "react";
import DriverTable from "./DriverTable";
import DriverForm from "./DriverForm";
import { useEffect } from "react";
import './DriverContainer.css'

function DriverContainer(){
    const [drivers, setDrivers] = useState([])

    const fetchDrivers = async () => {
        try{
            const response = await fetch('/drivers')
            console.log(response)
            const jsonData = await response.json()
            setDrivers(jsonData)
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchDriverById = async (id) => {
        try{
            const response = await fetch(`/drivers/${id}`)
            console.log(response)
            const jsonData = await response.json()
            return jsonData
        } catch (error) {
            console.log(error)
        }
    }

    const postDriver = async (params) => {
        try {
            const driver = params.name_driver
            const team = params.name_team
            if((driver != null && driver != "") && (team != null && team != "")){
                const response = await fetch('/drivers', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({name_driver: driver, name_team: team})
                })
                console.log(response)
            }

        }
        catch(error){
            console.log(error)
        }
        fetchDrivers()
    }

    const deleteDriver = async id => {
        console.log(id)
        try {
            const response = await fetch(`/drivers/${id}`, {
                method: 'DELETE'
            })
            if(response.ok){
                console.log(`Driver with ID: ${id} deleted`)
            }
        } catch (error) {
            console.log(error)
        }
        fetchDrivers()
    }

    const putDriver = async id => {
        try{
            let driver = prompt('New driver name:')
            let team = prompt('New team name:')
            if(driver != null && team != null){
                const response = await fetch(`/drivers/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({id: id, name_driver: driver, name_team: team})
                })
                console.log(response)
            }
            else{
                alert('Please enter a valid driver and team name.')
            }
        } catch (error) {
            console.log(error)
        }
        fetchDrivers()
    }

    const handleSubmit = async (driver) => {
        postDriver(driver)
    }

    const handleDelete = async (id) => {
        deleteDriver(id)
    }

    const handlePut = async (id) => {
        putDriver(id)
    }

    const handleMore = async (id) => {
        //
    }

    useEffect(() => {
        fetchDrivers()
    }, [])

    return (
        <>
        <div>
            <div className="title">
                <h1>Drivers</h1>
            </div>
            {drivers ? <DriverTable driverData={drivers} deleteDriver={handleDelete} editDriver={handlePut} driverInfo={handleMore}/> : "No Drivers"}
            <h1 className="title">Add a new driver</h1>
            <DriverForm onSubmitDriver={handleSubmit}/>
        </div>
        </>
    )
}
export default DriverContainer