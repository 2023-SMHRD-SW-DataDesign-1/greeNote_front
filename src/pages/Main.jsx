import React from 'react'
import Date from '../components/Page_main/Date'
import Diary_content from '../components/Diary_content'
import Sidebar from '../components/Page_main/Sidebar'
import Main_left from '../components/Page_main/Main_left'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='web_top_container'>
      <div className='main_container'>
        <div className='main_page1'>

          <div className='main_big_pie1'>
            <Sidebar />
            <div className='main_pie1'>
              <br />
              <Main_left />
            </div>
            <div className='main_pie2'>
              <br />
              <Diary_content />
              <Diary_content />
              <Diary_content />
              <Diary_content />
            </div>
          </div>
        </div>

        <br />

        <div className='main_page2'>
          <br />
          <div>
            <Date />
          </div>
          <br />
          <div>
            <Diary_content />
            <Diary_content />
            <Diary_content />
          </div>
        </div>

      </div>
    </div>



  )
}

export default Main