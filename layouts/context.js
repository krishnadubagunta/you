import React, { Component } from 'react'
import { DEFAULT_LAYOUT } from "../constants/defaults"
import LayoutSelector from './layouts'

const LayoutSharedContext = React.createContext()

export class LayoutProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layoutId: DEFAULT_LAYOUT,
    }
  }

  selectLayout = id => {
    this.setState({
      layoutId: id
    })
  }

  render() {
    const { layoutId } = this.state
    return (
      <LayoutSharedContext.Provider value={{ layoutId, selectLayout: this.selectLayout }}>
        <LayoutSelector />
        {
          this.props.children
        }
      </LayoutSharedContext.Provider>
    )
  }

}

export const LayoutConsumer = LayoutSharedContext.Consumer
