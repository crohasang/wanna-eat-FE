import { useState } from 'react';

const TitleStep = ({ data, updateData, nextStep }) => {
  const [title, setTitle] = useState(data.title);

  return (
    <div>
      <h2>먹팟 제목을 입력해주세요.</h2>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='먹팟 제목'
      />
      <button
        onClick={() => {
          updateData('title', title);
          nextStep();
        }}
      >
        다음
      </button>
    </div>
  );
};

export default TitleStep;
