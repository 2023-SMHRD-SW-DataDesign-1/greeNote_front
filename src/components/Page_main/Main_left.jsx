import React from 'react'
import Date from './Date'
import Calender from './Calender'
import GreenList from './GreenList'

const Main_left = () => {
  return (
    <div className='main_left'>
      <div className='web_date'>
        <Date />
      </div>
        <Calender/>
        <GreenList />
    </div>
  )
}

export default Main_left