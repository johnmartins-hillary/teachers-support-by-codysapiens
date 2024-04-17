import React from 'react'
import StoreProvider from '../../StoreProvider'
import Feedback from './Feedback'

const page = () => {
  return (
    <StoreProvider>
      <Feedback />
    </StoreProvider>
  )
}

export default page