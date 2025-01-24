import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Onboarding from './pages/Onboarding';
import MyPage from './pages/MyPage';
import Register from './pages/Register';
import { requestForToken, onMessageListener } from './firebase/firebase';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // 알림 권한 요청
    if ('Notification' in window) {
      console.log('Current notification permission:', Notification.permission);
      Notification.requestPermission().then((permission) => {
        console.log('알림 허용이 되어있나요 :', permission);
        if (permission === 'granted') {
          
          // FCM 토큰 요청
          requestForToken().then((token) => {
            if (token) {
              console.log('requestForToken 성공!');
            }
          });
        }
        if (permission === 'denied') {
          console.log('알림이 거부되었어요');
        }
      });
    } else {
      console.log('알림이 되지 않아요!');
    }

    // Foreground 메시지 수신 처리
    onMessageListener()
      .then((payload : any) => {
        // Foreground에서 알림 표시
        if (Notification.permission === 'granted') {
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/logo.png'
          });
        }
        if (Notification.permission === 'denied') {
          console.log('알림이 거부되었어요!'); 
                }
      })
      .catch((err) => console.log('메시지 수신 에러:', err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />}
        <Route path='/' element={<Navigate to='/onboarding' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
