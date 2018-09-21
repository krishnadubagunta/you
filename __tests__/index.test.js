/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index.js'

describe('With Enzyme', () => {
  it('Index shows "Title"', () => {
    const app = shallow(<Index />)

    expect(app.find('h1').text()).toEqual('Title')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Title"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})