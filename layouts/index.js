import React from 'react'
import { map } from "lodash"
import { LayoutConsumer } from "./context"

const Layout = () => (
    <LayoutConsumer>
      {(props) => {
        console.log(props)
        return (
          <div>
        {map([1, 2, 3, 4], id => (<button key={id} onClick={() => props.selectLayout(id)}>{`Layout ${id}`}</button>))}
        <style jsx>{`
       div {
        position: absolute;
    }
  `}
        </style>
      </div>
        )
      }}
    </LayoutConsumer>
)

export default Layout
