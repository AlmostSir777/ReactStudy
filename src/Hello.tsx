import React from 'react'
import './Hello.css'

interface HelloMessage {
	message?: string
}

const Hello: React.FunctionComponent<HelloMessage> = (props) => {
	return <div className="hello">hello, {props.message}</div>
}

Hello.defaultProps = {
	message: '一杯阿萨姆',
}

export default Hello
