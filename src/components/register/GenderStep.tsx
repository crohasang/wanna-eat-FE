/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';

interface GenderStepProps {
  gender: 'male' | 'female' | null;
  onGenderChange: (gender: 'male' | 'female') => void;
}

const GenderStep = ({ gender, onGenderChange }: GenderStepProps) => {
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
          margin-bottom: 12px;
        `}
      >
        {'성별은\n어떻게 되시나요?'}
      </p>

      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 20px;
          padding: 0 20px;
        `}
      >
        <Button
          onClick={() => onGenderChange('male')}
          css={css`
            width: 140px;
            background-color: ${gender === 'male' ? '#4CAF50' : '#f5f5f5'};
            color: ${gender === 'male' ? 'white' : '#333'};
            &:hover {
              background-color: ${gender === 'male' ? '#45a049' : '#e0e0e0'};
            }
          `}
        >
          남성
        </Button>
        <Button
          onClick={() => onGenderChange('female')}
          css={css`
            width: 140px;
            background-color: ${gender === 'female' ? '#4CAF50' : '#f5f5f5'};
            color: ${gender === 'female' ? 'white' : '#333'};
            &:hover {
              background-color: ${gender === 'female' ? '#45a049' : '#e0e0e0'};
            }
          `}
        >
          여성
        </Button>
      </div>
    </Col>
  );
};

export default GenderStep;
