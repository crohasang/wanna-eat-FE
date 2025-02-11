import { useState } from 'react';

const ScheduleStep = ({ data, updateData, nextStep, prevStep }) => {
  const [date, setDate] = useState(data.date);
  const [time, setTime] = useState(data.time);

  return (
    <div>
      <h2>먹팟 일정을 입력해주세요.</h2>
      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={prevStep}>이전</button>
      <button
        onClick={() => {
          updateData('date', date);
          updateData('time', time);
          nextStep();
        }}
      >
        다음
      </button>
    </div>
  );
};

export default ScheduleStep;
