const ConfirmStep = ({ data, nextStep, prevStep }) => {
  return (
    <div>
      <h2>먹팟 등록 전 확인해주세요.</h2>
      <p>제목: {data.title}</p>
      <p>
        일정: {data.date} {data.time}
      </p>
      <p>참여자: {data.participants.join(', ')}</p>
      <p>알림 메시지: {data.message}</p>
      <button onClick={prevStep}>이전</button>
      <button onClick={nextStep}>등록하기</button>
    </div>
  );
};

export default ConfirmStep;
