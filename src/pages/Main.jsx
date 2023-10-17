import React from 'react'
import Header_home from '../components/Header_home'
import Calender from '../components/Calender'
import GreenList from '../components/GreenList'
import Icons_home from '../components/Icons_home'
import Header_home2 from '../components/Header_home2'
import Date from '../components/Date'
import Diary_content from '../components/Diary_content'

const Main = () => {
  return (
    <div>
      <div className='main_page1'>
        <div>
          <Header_home />
        </div>
        <br />
        <div>
          <Calender />
        </div>
        <br />
        <div>
          <GreenList />
        </div>
        <br />
        <div>
          <Icons_home />
        </div>

      </div>
      <br />
      <div className='main_page2'>
        <div>
          <Header_home2 />
        </div>
        <br/>
        <div>
          <Date/>
        </div>
        <br/>
        <div>
          <Diary_content/>
        </div>
      </div>

    </div>



  )
}

export default Main