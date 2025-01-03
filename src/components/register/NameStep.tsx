/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';

interface NameStepProps {
  nickname: string;
  onNicknameChange: (value: string) => void;
}

const NameStep = ({ nickname, onNicknameChange }: NameStepProps) => {
  return (
    <Col gap="12px" alignItems="start" css={css`width: 100%;`}>
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
        onChange={(e) => onNicknameChange(e.target.value)}
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
  );
};

export default NameStep;
