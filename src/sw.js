// Service Worker에서 사용할 Workbox 매니페스트
self.__WB_MANIFEST

// Firebase 초기화
firebase.initializeApp(self.__FIREBASE_CONFIG__);

const messaging = firebase.messaging();

// 백그라운드 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log('Background 메시지 수신:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});