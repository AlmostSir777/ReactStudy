import * as React from 'react'
import "./Home1.css";

interface IHome1Props {
  childcount: number;
}

const Home1: React.FunctionComponent<IHome1Props> = (props) => {
  const { childcount } = props
  return <div className='home1-container'>Home组件1--{childcount}</div>
}

export default Home1