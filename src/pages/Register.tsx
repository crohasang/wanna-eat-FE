/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BackButton from '../components/common/BackButton';
import Button from '../components/common/Button';
import ProgressBar from '../components/register/ProgressBar';
import { Col } from '../components/commons/Flex';

const Register = () => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitted nickname:', nickname);
  };

  return (
    <Col
      css={css`
        height: 100vh;
        width: 100vw;
        padding: 0 20px;
      `}
      justifyContent="space-between"
      alignItems="center"
    >
      <Col
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
          flex: 1;
        `}
        gap="24px"
        alignItems="center"
      >
        <div
          css={css`
            width: 100%;
            margin-bottom: 40px;
          `}
        >
          <BackButton to="/" />
          <ProgressBar currentStep={1} totalSteps={7} />
        </div>
        
        <Col gap="12px" alignItems="start">
          <p
            css={css`
              color: var(--black-accents-5, #111);
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 140%;
              white-space: pre-line;
              text-align: start;
            `}
          >
            {'반가워요!\n이름을 입력해주세요'}
          </p>
          
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="이름"
            css={css`
              width: 100%;
              padding: 12px 16px;
              border: none;
              border-bottom: 1px solid #ddd;
              font-size: 16px;
              margin-bottom: 24px;
              text-align: start;
              
              &:focus {
                outline: none;
                border-bottom-color: #4CAF50;
              }
            `}
          />
        </Col>
      </Col>
      
      <div
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
        `}
      >
        <Button onClick={handleSubmit} disabled={!nickname.trim()}>
          다음
        </Button>
      </div>
    </Col>
  );
};

export default Register;