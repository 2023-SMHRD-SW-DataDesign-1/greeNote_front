import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import './css/Header_home.css';
import './css/Calender.css';
import './css/GreenList.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
