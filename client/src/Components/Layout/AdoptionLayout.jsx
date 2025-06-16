import React from 'react'
import { Outlet } from 'react-router-dom'
import StaticDataSegment from '../Adoption/StaticDataSegment'
import AdoptionNavbar from '../Adoption/AdoptionNavbar'


const AdoptionLayout = () => {
  return (
    <main className='px-14'>
      <StaticDataSegment/>
      <AdoptionNavbar/>
      <Outlet/>      
    </main>
  )
}

export default AdoptionLayout