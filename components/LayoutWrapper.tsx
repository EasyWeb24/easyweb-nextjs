
import Navigation from './Navigation'
import { Footer } from '@/layouts'
import React from 'react'



const LayoutWrapper = ({children}: {children:  React.ReactNode}) => {

  

  return (
    <>
        <Navigation/>
         {children}
        <Footer/> 

    </>
  )
}

export default LayoutWrapper