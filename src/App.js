import { Routes, Route } from 'react-router-dom';

/* 페이지 */
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Mypage from './pages/Mypage';
import Ai from './pages/Ai';
import AiReturn from './pages/AiReturn';
import Slide from './pages/Slide';
import AddGreen from './pages/AddGreen';
import MyGreen from './pages/MyGreen';
import GreenDiary from './pages/GreenDiary';
import WriteDiary from './pages/WriteDiary';
import DiaryDetail from './pages/DiaryDetail';
import Testpage from './pages/Testpage';

/* input페이지 */
import './css/Page_main.css';
import './css/Page_join.css';
import './css/Page_login.css';
import './css/Page_mypage.css';
import './css/Input_writeDiary.css';

/* 테스트용 페이지!! 나중에 삭제 예정 */
import Testpage2 from './pages/Testpage2';
import TestFlask from './pages/TestFlask';

/* css파일 */
import './css/Header_home.css';
import './css/Calendar.css';
import './css/GreenList.css';
import './css/Date.css';
import './css/Diary_content.css';
import './css/Page_intro.css';
import './css/Page_greenDiary.css';


// ai css
import './css/AiHeader.css';
import './css/AiPlant.css';
import './css/AiPhoto.css';
import './css/ItemPhoto.css';

import './css/ItemAiReturn.css';
import './css/AiReturnPhoto.css'
import './css/AiPhotoBox.css';

import './css/ItemPlantChoice.css'


// slide css
import './css/ItemSlide.css'
import './css/SlideItemBox.css'
import './css/Slide.css'


import './css/Page_addGreen.css';
import './css/Gardening.css';
import './css/Switch.css';
import './css/Page_mygreen.css';
import './css/GreenList_all.css';
import './css/Header_etc.css';
import './css/Page_writeDiary.css';
import './css/Switch_ai.css';
import './css/Footer_diary.css';

// 페이지
import './css/Ai.css'
import Header_home2 from './components/Page_main/Header_home2';




function App() {
  return (
    <div>
      <Routes>
        {/* 헤더 있는 페이지 */}
        <Route path='/' element={<><Header_home2 /><Main /></>} />
        <Route path='/mypage' element={<><Header_home2 /><Mypage /></>} />
        <Route path='/ai' element={<><Header_home2 /><Ai /></>} />
        <Route path='/slide' element={<><Header_home2 /><Slide /></>} />
        <Route path='/addgreen' element={<><Header_home2 /><AddGreen /></>} />
        <Route path='/mygreen' element={<><Header_home2 /><MyGreen /></>} />
        <Route path='/aiReturn' element={<><Header_home2 /><AiReturn /></>} />
        <Route path='/greendiary/:plant_id' element={<><Header_home2 /><GreenDiary /></>} />
        <Route path='/writediary/:plant_id' element={<><Header_home2 /><WriteDiary /></>} />
        <Route path='/diarydetail' element={<><Header_home2 /><DiaryDetail /></>} />

        {/* 테스트용 페이지 */}
        <Route path='/testFlask' element={<TestFlask />}></Route>
        <Route path='/testpage' element={<><Header_home2 /><Testpage /></>} />
        <Route path='/testpage2' element={<><Header_home2 /><Testpage2 /></>} />

        {/* 헤더 없는 페이지 */}
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>

      </Routes>

    </div>
  );
}

export default App;
