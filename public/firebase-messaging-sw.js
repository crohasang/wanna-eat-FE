importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Firebase 초기화
firebase.initializeApp({
  apiKey: "AIzaSyByNJ3Px-qkqVe5uFojtfxkVQ0qlSeH1cg",
  authDomain: "wanna-eat-f475f.firebaseapp.com",
  projectId: "wanna-eat-f475f",
  storageBucket: "wanna-eat-f475f.firebasestorage.app",
  messagingSenderId: "202303753961",
  appId: "1:202303753961:web:0e9f2c8e17953cda6baa78",
  measurementId: "G-MGC32TN2FX"
});

const messaging = firebase.messaging();

// Background 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log('Background 메시지 수신:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});