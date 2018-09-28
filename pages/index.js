import React, { Fragment } from 'react'
import NavbarContainer from '../components/NavbarContainer'
import Title from '../components/Typography/Title'
import Layout from '../layouts'
import { dev } from '../constants/settings'

const Index = () => (
  <Fragment>
    <Layout />
    <NavbarContainer>
      <Title>Title</Title>
    </NavbarContainer>
  </Fragment>
)
export default Index