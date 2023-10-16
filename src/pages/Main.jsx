import React from 'react'
import Header_home from '../components/Header_home'
import Calender from '../components/Calender'
import GreenList from '../components/GreenList'

const Main = () => {
  return (
    <div>
      <div>
        <Header_home />
      </div>
      <br/>
      <div>
          <Calender/>
      </div>
      <br/>
      <div>
          <GreenList/>
      </div>

    </div>


      
  )
}

export default Main