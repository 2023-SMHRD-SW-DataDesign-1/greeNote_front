import { Routes, Route } from 'react-router-dom';

/* 페이지 컴포넌트 */
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Mypage from './pages/Mypage';

/* css파일 */
import './css/Header_home.css';
import './css/Calender.css';
import './css/GreenList.css';
import './css/Icons_home.css';
import './css/Header_home2.css';
import './css/Date.css';
import './css/Diary_content.css';
import './css/Page_intro.css';

/* input페이지 */
import './css/Input.css';
import './css/Page_join.css';
import './css/Page_login.css';
import './css/Page_mypage.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/mypage' element={<Mypage/>}></Route>
    </Routes>
  );
}

export default App;
