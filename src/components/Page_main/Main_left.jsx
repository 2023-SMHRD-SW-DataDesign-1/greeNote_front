import React from 'react'
import Date from './Date'

import GreenList from './GreenList'
import Icons_home from './Icons_home'

const Main_left = () => {
  return (
    <div className='main_left'>
      <div className='web_date'>
        <Date />
      </div>
      
      <GreenList />
      <Icons_home />
    </div>
  )
}

export default Main_left