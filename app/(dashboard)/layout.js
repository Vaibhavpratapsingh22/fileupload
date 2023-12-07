import React from 'react'
import Header from '../_components/Header/page'
import SideNav from './_components/SideNav'

const layout = ({children}) => {
  return (
    <div>
        <div><SideNav /></div>
        {children}
        
        </div>
  )
}

export default layout