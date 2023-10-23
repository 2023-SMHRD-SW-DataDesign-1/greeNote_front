import React from 'react'
import Sidebar from '../components/Sidebar'
import Header_home from '../components/Page_main/Header_home'
import Main_left from '../components/Page_main/Main_left'
import Diary_content from '../components/Diary_content'


const Testpage2 = () => {
    return (
        <div className='web_top_container'>
            <div className='main_container'>
                <div className='main_page1'>
                    <Header_home />
                    <div className='main_big_pie1'>
                        <Sidebar />
                        <div className='main_pie1'>
                            <Main_left />
                        </div>
                        <div className='main_pie2'>
                            <Diary_content />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testpage2