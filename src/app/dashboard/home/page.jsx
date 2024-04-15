import React from 'react'
import StoreProvider from '../../StoreProvider'
import Home from './Home'

const page = () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  )
}

export default page