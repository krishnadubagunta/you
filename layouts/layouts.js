import React from 'react'
import { LAYOUT_1, LAYOUT_2, LAYOUT_3, LAYOUT_4 } from "../constants/defaults";
import { LayoutConsumer } from "./context"

const LayoutSelector = () => (
  <LayoutConsumer>
    {({ layoutId }) => {
      switch (layoutId) {
        case LAYOUT_1:
          return (<div>
            Layout 1
          </div>)
        case LAYOUT_2:
          return (<div>
            Layout 2
          </div>)
        case LAYOUT_3:
          return (<div>
            Layout 3
          </div>)
        case LAYOUT_4:
          return (<div>
            Layout 4
          </div>)
        default:
          return (<div> Error </div>)
      }
    }}
  </LayoutConsumer>
)

export default LayoutSelector