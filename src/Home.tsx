import * as React from 'react'
import { useState } from 'react'
import Home1 from './component/Home1'
import './Home.css'
import { add } from './util/Util'

interface IHomeProps {
	childCount: number
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const [count, setCount] = useState(props.childCount)
	function addCount() {
		setCount(add(count, 10))
	}

    function gotoDetail(){
        
    }

	return (
		<div className="home-container">
			<span>home父组件的内容数字是{count}</span>
			<button onClick={addCount}>增加</button>
			<Home1 childcount={count}></Home1>
		</div>
	)
}

export default Home
