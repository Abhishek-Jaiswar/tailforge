import Dropdown from '@/components/Dropdown'
import React from 'react'

const Filters = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='flex items-center justify-center'>
        <div>
          <Dropdown name='Level' items={["Easy", "Medium", "Hard"]} />
        </div>
      </div>
    </div>
  )
}

export default Filters