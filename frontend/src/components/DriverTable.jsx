import './DriverTable.css'

function TableHeader(){
    // Renders head of table
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Team</th>
                <th></th>
            </tr>
        </thead>
    )
}
function TableBody(props){
    const rows = props.driverData.map((item) => {
        return(
            <tr className='table-row-main' key={item.id}>
                <td>{item.name_driver}</td>
                <td>{item.name_team}</td>
                <td>
                    <button className='button-remove' onClick={() => props.deleteDriver(item.id)}>Delete</button>
                    <button className='button-edit' onClick={() => props.editDriver(item.id)}>EDIT</button>
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
            <TableBody driverData={props.driverData} deleteDriver={props.deleteDriver} editDriver={props.editDriver}/>
        </table>
    )
}

export default DriverTable