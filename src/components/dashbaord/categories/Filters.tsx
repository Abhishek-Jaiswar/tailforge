import Dropdown from '@/components/Dropdown'
import React from 'react'
import SearchBar from './SearchBar'

const Filters = () => {
  return (
    <div className=' mt-10 mb-6 px-4 py-2 bg-neutral-800 rounded-lg flex items-center justify-between'>
      <div>
        <h2 className='text-lg font-semibold text-white'>Filters</h2>
        <p className='text-sm text-neutral-400'>Select your preferences to filter challenges</p>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <div className='mr-4'>
          <Dropdown name='Level' items={["Easy", "Medium", "Hard"]} />
        </div>
        <div>
          <Dropdown width=' w-48' name='Category' items={["All", "Web Development", "Data Science", "Machine Learning", "Mobile Development"]} />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Filters