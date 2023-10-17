import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Intro from './pages/Intro';
import './css/Header_home.css';
import './css/Calender.css';
import './css/GreenList.css';
import './css/Icons_home.css';
import './css/Header_home2.css';
import './css/Date.css';
import './css/Diary_content.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/' element={<Intro/>}></Route>
    </Routes>
  );
}

export default App;
