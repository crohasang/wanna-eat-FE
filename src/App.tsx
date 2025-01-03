import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/' element={<Navigate to='/onboarding' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
