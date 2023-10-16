import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  );
}

export default App;
