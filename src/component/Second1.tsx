
import * as React from 'react'

export interface ISecond1Props {
  count: number
}

export interface ISecond1State {
  title: string
}

export default class Second1 extends React.Component<
  ISecond1Props,
  ISecond1State
> {
  constructor(props: ISecond1Props) {
    super(props)

    this.state = {
      title: '子组件标题',
    }
  }

  public render() {
    return (
      <div>
        {this.state.title}---{this.props.count}
      </div>
    )
  }
}
