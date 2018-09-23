/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { find } from "lodash"

import Index from '../pages/index.js'

describe('With Enzyme', () => {
  it('Index shows "Title"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    const node = find(tree.children, child => child.type === 'h1')
    expect(node.children).toContain('Title')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Title"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})