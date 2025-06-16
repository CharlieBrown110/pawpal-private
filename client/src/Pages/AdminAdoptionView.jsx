import PetList from '@/Components/Adoption/PetList'
import StaticDataSegment from '@/Components/Adoption/StaticDataSegment'
import Footer from '@/Components/Home/Footer'
import React from 'react'

const AdminAdoptionView = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#EBE8DB]">
      <div>
        <StaticDataSegment className='px-14'/>
        <PetList/>
      </div>
        <Footer/>
    </div>
  )
}

export default AdminAdoptionView