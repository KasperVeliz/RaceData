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
            if((driver != null || driver != "") && (team != null || team != "")){
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
    }

    const deleteDriver = async (params) => {
        try {
            const id = params.id
            const response = await fetch('/drivers/id', {
                method: 'DELETE'
            })
            if(response.ok){
                console.log(`Driver with ID: ${id} deleted`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDrivers()
    }, [])

    const handleRemove = (index) => {
        //const updatedDrivers = [...drivers.slice(0,index), ...drivers.slice(index + 1)]
        //setDrivers(updatedDrivers)
        try{
            const driverToRemove = fetchDriverById(index + 1)
            deleteDriver(driverToRemove)
            fetchDrivers()
        } catch (error){
            console.log(error)
        }
    }

    const handleSubmit = (driver) => {
        postDriver(driver)
        setDrivers([...drivers, driver])
    }

    return (
        <>
        <div>
            <div className="title">
                <h1>Drivers</h1>
            </div>
            <DriverTable driverData={drivers} removeDriver={handleRemove}/>
            <h1 className="title">Add a new driver</h1>
            <DriverForm onSubmitDriver={handleSubmit}/>
        </div>
        </>
    )
}
export default DriverContainer