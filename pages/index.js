import React, { Fragment } from 'react'
import NavbarContainer from '../components/NavbarContainer'
import Title from '../components/Typography/Title'
import Layout from '../layouts'
import { dev } from '../constants/settings'
import { LayoutConsumer } from '../layouts/context';

const Index = () => (
  <Fragment>
    <Layout />
    <NavbarContainer>
      <LayoutConsumer>
        {({layoutId}) => (<Title>{`Title ${layoutId} `}</Title>)}
      </LayoutConsumer>
    </NavbarContainer>
  </Fragment>
)
export default Index
