/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import BigButton from '../common/BigButton';

interface RestaurantTypeStepProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const restaurantTypes = [
  ['한식', '양식'],
  ['중식', '일식'],
  ['아시안', '기타']
];

const RestaurantTypeStep = ({ selectedType, onTypeChange }: RestaurantTypeStepProps) => {
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
          margin-bottom: 32px;
        `}
      >
        {'선호하는 식당의 종류를\n선택해주세요.'}
      </p>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 157px);
          gap: 16px;
          justify-content: center;
          width: 100%;
        `}
      >
        {restaurantTypes.map((row) => (
          row.map((type) => (
            <BigButton
              key={type}
              selected={selectedType === type}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </BigButton>
          ))
        ))}
      </div>
    </Col>
  );
};

export default RestaurantTypeStep;
