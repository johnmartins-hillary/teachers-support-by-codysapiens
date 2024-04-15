import React from 'react'
import StoreProvider from '../../StoreProvider'
import TeachersNetworkingPage from './Networking'

const page = () => {
  return (
    <StoreProvider>
      <TeachersNetworkingPage />
    </StoreProvider>
  )
}

export default page