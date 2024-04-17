import React from 'react'
import StoreProvider from '../../StoreProvider'
import JobSearchBoard from './JobBoard'

const page = () => {
  return (
    <StoreProvider>
      <JobSearchBoard />
    </StoreProvider>
  )
}

export default page