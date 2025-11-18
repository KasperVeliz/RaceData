import { useState } from "react";
import DriverTable from "./DriverTable";
import DriverForm from "./DriverForm";

function DriverContainer(){
    const [drivers, setDrivers] = useState([])

    const handleRemove = (index) => {
        const updatedDrivers = [...drivers.slice(0,index), ...drivers.slice(index + 1)]
        setDrivers(updatedDrivers)
    }

    const handleSubmit = (driver) => {
        setDrivers([...drivers, driver])
    }

    return (
        <>
        <div>
            <div>
                <h1>Drivers</h1>
            </div>
            <DriverTable driverData={drivers} removeDriver={handleRemove}/>
            <h1>Add a new driver</h1>
            <DriverForm onSubmitDriver={handleSubmit}/>
        </div>
        </>
    )
}
export default DriverContainer