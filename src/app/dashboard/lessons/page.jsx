import React from 'react'
import StoreProvider from '../../StoreProvider'
import Lessons from './Lessons'

const page = () => {
  return (
    <StoreProvider>
      <Lessons />
    </StoreProvider>
  )
}

export default page