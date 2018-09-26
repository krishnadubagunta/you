import React from 'react'
import { map } from "lodash"
import { LayoutConsumer } from "./context"

const Layout = () => (
  <div>
    <LayoutConsumer>
      {({ selectLayout }) => (
        <div>
          {map([1, 2, 3, 4], id => (
            <button key={id} onClick={() => selectLayout(id)}>`Layout ${id}`</button>
          ))}
        </div>
      )}
      <style jsx>{
        `
       div {
        position: absolute;
    }
  `}
      </style>
    </LayoutConsumer>
  </div>
)

export default Layout