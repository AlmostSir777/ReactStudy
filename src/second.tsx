
import * as React from 'react'
import SecondComponent from './component/Second1'
export interface ISecondProps {}

export interface ISecondState {
  count: number
  title: string
}

export default class Second extends React.Component<
  ISecondProps,
  ISecondState
> {
  constructor(props: ISecondProps) {
    super(props)

    this.state = {
      count: 0,
      title: 'Second标题',
    }
    this.changeCount = this.changeCount.bind(this)
  }
  changeCount() {
    let result = this.state.count + 1
    this.setState({
      count: result,
    })
  }
  public render() {
    return (
      <div>
        {this.state.title}--{this.state.count}
        <button onClick={this.changeCount}>点击增加</button>
        <SecondComponent count={this.state.count}></SecondComponent>
      </div>
    )
  }
}
