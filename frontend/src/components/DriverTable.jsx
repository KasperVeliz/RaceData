function TableHeader(){
    // Renders head of table
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    // Renders table data

    const rows = props.driverData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name_driver}</td>
                <td>{row.name_team}</td>
                <td>
                    <button onClick={()=> props.removeDriver(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

function DriverTable(props){

    return(
        <table>
            <TableHeader/>
            <TableBody driverData={props.driverData} removeDriver={props.removeDriver}/>
        </table>
    )
}

export default DriverTable