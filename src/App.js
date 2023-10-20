import { Routes, Route } from 'react-router-dom';

/* 페이지 */
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Mypage from './pages/Mypage';
import Ai from './pages/Ai';
import AiReturn from './pages/AiReturn';
import FlipBook from './pages/FlipBook';
import AddGreen from './pages/AddGreen';
import MyGreen from './pages/MyGreen';
import GreenDiary from './pages/GreenDiary';
import WriteDiary from './pages/WriteDiary';
import DiaryDetail from './pages/DiaryDetail';
import Testpage from './pages/Testpage';

/* 테스트용 페이지!! 나중에 삭제 예정 */
import TestJoin from './pages/TestJoin';

/* css파일 */
import './css/Header_home.css';
import './css/Calender.css';
import './css/GreenList.css';
import './css/Icons_home.css';
import './css/Header_home2.css';
import './css/Date.css';
import './css/Diary_content.css';
import './css/Page_intro.css';

// ai css
import './css/AiHeader.css';
import './css/AiPlant.css';
import './css/AiPhoto.css';
import './css/ItemPhoto.css';
import './css/ItemAiReturn.css';

import './css/AiReturnPhoto.css'
import './css/AiPhotoBox.css';

// filp css
import './css/ItemFlipBook.css'
import './css/FlipBook.css'

import './css/Page_addGreen.css';
import './css/Gardening.css';
import './css/Switch.css';
import './css/Page_mygreen.css';
import './css/GreenList_all.css';
import './css/Page_greenDiary.css';
import './css/Header_etc.css';
import './css/Page_writeDiary.css';
import './css/Switch_ai.css';
import './css/Footer_diary.css';

// 페이지
import './css/Ai.css'

/* input페이지 */
import './css/Input.css';
import './css/Page_join.css';
import './css/Page_login.css';
import './css/Page_mypage.css';
import './css/Input_writeDiary.css';





function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/mypage' element={<Mypage/>}></Route>
      <Route path='/ai' element={<Ai/>}></Route>
      <Route path='/flipbook' element={<FlipBook/>}></Route>
      <Route path='/addgreen' element={<AddGreen/>}></Route>
      <Route path='/mygreen' element={<MyGreen/>}></Route>
      <Route path='/aiReturn' element={<AiReturn/>}></Route>
      <Route path='/greendiary' element={<GreenDiary/>}></Route>
      <Route path='/writediary' element={<WriteDiary/>}></Route>
      <Route path='/diarydetail' element={<DiaryDetail/>}></Route>
      <Route path='/testpage' element={<Testpage/>}></Route>

      {/* 테스트용 페이지 */}
      <Route path='/testJoin' element={<TestJoin/>}></Route>
    </Routes>
  );
}

export default App;
