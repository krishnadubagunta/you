import React from 'react'
import { LayoutConsumer } from "./context"

const Layout = ({ id, children }) => (
  <LayoutConsumer>
    {props => (
      <div {...props}>
        {children}
      </div>
    )}
  </LayoutConsumer>
)