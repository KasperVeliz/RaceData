import { useState } from "react"

function DriverForm(props){

    const [name_driver, setName] = useState("")
    const [name_team, setTeam] = useState("")

    const handleDriverNameChange = (event) => {
        setName(event.target.value)
    }
    const handleTeamNameChange = (event) => {
        setTeam(event.target.value)
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.onSubmitDriver({name_driver,name_team})
        }}>
            <label htmlFor="name_driver">Driver Name: </label>
            <input type="text" id="name_driver" name="name_driver" onChange={handleDriverNameChange} autoComplete="off"/>
            <br></br><br></br>
            <label htmlFor="url">Team Name: </label>
            <input type="text" id="url" name="url" onChange={handleTeamNameChange} autoComplete="off"/>
            <br></br><br></br>
            <input type="submit" value={"Submit"}></input>
        </form>
    )
}

export default DriverForm