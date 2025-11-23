import { useState } from "react"
import './DriverForm.css'

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
            <div className="form-row">
                <input type="text" id="name_driver" name="name_driver" onChange={handleDriverNameChange} autoComplete="off" placeholder="Driver Name"/>
            </div>
            <br></br><br></br>
            <div className="form-row">
                <input type="text" id="tame_team" name="name_team" onChange={handleTeamNameChange} autoComplete="off" placeholder="Team Name"/>
            </div>
            <br></br><br></br>
            <div className="form-row">
                <input className="submit-button" type="submit" value={"Submit"}></input>
            </div>
        </form>
    )
}

export default DriverForm