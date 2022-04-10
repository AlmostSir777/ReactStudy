import React from 'react'
import { Button } from "antd";
import './App.css'
import Hello from './Hello'
import Home from './Home'
import Demo from './Demo'

function App() {
	return (
		<div className="App">
			<Hello message="给我一杯茶"></Hello>
			<Home childCount={20}></Home>
            <Button type='primary'>66666</Button>
            {/* <Demo></Demo> */}
		</div>
	)
}

export default App
