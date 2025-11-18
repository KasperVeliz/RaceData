import { useState , useEffect } from 'react'
import './App.css'

function App() {
	const [drivers, setDrivers] = useState(null)

	function getDriver(){
		fetch('http://localhost:3001')
		.then(response => {
			return response.text();
		})
		.then(data => {
			setDrivers(data);
		});
	}

	function createDriver(){
		let name_driver = prompt("Enter Driver Name: ")
		let name_team = prompt("Enter Team Name: ")
		if ((name_driver != null || name_driver == "") && (name_team != null || name_team == "")){
			fetch('http://localhost:3001/drivers', {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify({name_driver, name_team}),
			})
			.then(respoonse => {
				return respoonse.text()
			})
			.then(data => {
				alert(data)
				getDriver()
			})
		}
		else{
			alert("Enter valid input")
		}
	}

	function deleteDriver(){
		let id = prompt("Enter Driver ID to delete: ")

		try {
			fetch(`http://localhost:3001/drivers/${id}`, {
				method: 'DELETE',
			})
			.then (response => {
				return response.text()
			})
			.then (data => {
				alert(data)
				getDriver()
			})
		} catch (error) {
			alert(error)
		}
	}

	function AddDriverButton (){
		return (
			<button onClick={createDriver}>+</button>
		)
	}

	function RemoveDriver (){
		return (
			<button onClick={deleteDriver}>-</button>
		)
	}


	useEffect (() => {
		getDriver()
	}, [])
	return (
	<>
		<div>
			{drivers ? drivers : 'There is no driver data available'}
			<br />
			<AddDriverButton/>
			<br />
			<RemoveDriver/>
		</div>
	</>
	)
}

export default App
