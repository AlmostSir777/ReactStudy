import React from 'react'
import './App.css'
import Hello from './Hello'
import Home from './Home'

function App() {
	return (
		<div className="App">
			<Hello message="给我一杯茶"></Hello>
			<Home childCount={10}></Home>
		</div>
	)
}

export default App
