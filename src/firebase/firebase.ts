import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

const messaging = getMessaging(app);
console.log('Messaging initialized:', messaging);

// FCM 토큰 가져오기
export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    });
    
    if (currentToken) {
      console.log('FCM 토큰 가져오기 성공!')

      // 테스트 시 사용
      // console.log('FCM 토큰 값: ', currentToken);

      // 나중에 토큰을 백엔드 서버로 전송하는 로직 추가
      return currentToken;
    } else {
      console.log('토큰을 가져올 수 없습니다.');
    }
  } catch (err) {
    console.log('토큰 발급 중 에러 발생:', err);
  }
};

// foreground 메시지 수신
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Foreground message received:', payload);
      resolve(payload);
    });
  });