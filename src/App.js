import { Routes, Route } from 'react-router-dom';

/* 페이지 */
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Mypage from './pages/Mypage';
import Ai from './pages/Ai';
import FilpBook from './pages/FilpBook';
import AddGreen from './pages/AddGreen';

/* css파일 */
import './css/Header_home.css';
import './css/Calender.css';
import './css/GreenList.css';
import './css/Icons_home.css';
import './css/Header_home2.css';
import './css/Date.css';
import './css/Diary_content.css';
import './css/Page_intro.css';
import './css/AiPlant.css';
import './css/AiPhoto.css';
import './css/ItemPhoto.css';
import './css/AiHeader.css';
import './css/Page_AddGreen.css';
import './css/Header_etc.css';
import './css/Gardening.css';
import './css/Switch.css';


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
      <Route path='/ai' element={<Ai/>}></Route>
      <Route path='/filpbook' element={<FilpBook/>}></Route>
      <Route path='/addGreen' element={<AddGreen/>}></Route>
    </Routes>
  );
}

export default App;
