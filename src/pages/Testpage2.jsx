import React from 'react'
import Sidebar from '../components/Sidebar'
import Header_home from '../components/Page_main/Header_home'
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