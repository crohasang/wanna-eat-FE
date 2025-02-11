import { useState } from 'react';

const ParticipantsStep = ({ data, updateData, nextStep, prevStep }) => {
  const [selectedParticipants, setSelectedParticipants] = useState(data.participants);

  const toggleParticipant = (name) => {
    setSelectedParticipants((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div>
      <h2>먹팟에 초대할 구성원을 선택해주세요.</h2>
      {['먹을래(여성)', '먹을래(남성)', '먹을래(물류팀)'].map((name) => (
        <label key={name}>
          <input
            type='checkbox'
            checked={selectedParticipants.includes(name)}
            onChange={() => toggleParticipant(name)}
          />
          {name}
        </label>
      ))}
      <button onClick={prevStep}>이전</button>
      <button
        onClick={() => {
          updateData('participants', selectedParticipants);
          nextStep();
        }}
      >
        다음
      </button>
    </div>
  );
};

export default ParticipantsStep;
