import { useState } from 'react';

const NotificationStep = ({ data, updateData, nextStep, prevStep }) => {
  const [message, setMessage] = useState(data.message);

  return (
    <div>
      <h2>구성원에게 전송할 알림 메시지를 선택해주세요.</h2>
      {['커피 먹을 사람?', '점심 먹을 사람?', '직접 작성하기'].map((msg) => (
        <button key={msg} onClick={() => setMessage(msg)}>
          {msg}
        </button>
      ))}
      <button onClick={prevStep}>이전</button>
      <button
        onClick={() => {
          updateData('message', message);
          nextStep();
        }}
      >
        다음
      </button>
    </div>
  );
};

export default NotificationStep;
