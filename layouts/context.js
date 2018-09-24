import React, { Component } from 'react'
import { DEFAULT_LAYOUT } from "../constants/defaults"

const LayoutSharedContext = React.createContext()

export class LayoutProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layoutId: DEFAULT_LAYOUT
    }
  }

  selectLayout = id => {
    this.setState({
      layoutId: id
    })
  }

  resetLayout = () => {
    this.setState({
      layoutId: DEFAULT_LAYOUT
    })
  }

  render() {

  }

}