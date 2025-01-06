/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import BigButton from '../common/BigButton';

interface RestaurantCharacteristicsStepProps {
  characteristics: {
    atmosphere: string;
    purpose: string;
    size: string;
  };
  onCharacteristicChange: (category: 'atmosphere' | 'purpose' | 'size', value: string) => void;
}

const characteristicsOptions = {
  atmosphere: [
    { value: '회식 적합형', label: '회식 적합형' },
    { value: '차분한 분위기', label: '차분한 분위기' }
  ],
  purpose: [
    { value: '주류 위주', label: '주류 위주' },
    { value: '식사 위주', label: '식사 위주' }
  ],
  size: [
    { value: '소규모(1-10명)', label: '소규모(1-10명)' },
    { value: '대규모(11명 이상)', label: '대규모(11명 이상)' }
  ]
};

const categoryTitles = {
  atmosphere: '분위기',
  purpose: '식사류',
  size: '식당 규모'
};

const RestaurantCharacteristicsStep = ({
  characteristics,
  onCharacteristicChange
}: RestaurantCharacteristicsStepProps) => {
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
        {'주로 방문하는 식당의 특징을\n선택해주세요.'}
      </p>

      <Col gap="24px" css={css`width: 100%; align-items: center;`}>
        {Object.entries(characteristicsOptions).map(([category, options]) => (
          <div
            key={category}
            css={css`
              width: 330px;
            `}
          >
            <h3
              css={css`
                color: #000;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.165px;
                margin-bottom: 16px;
              `}
            >
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(2, 157px);
                gap: 16px;
                width: 100%;
              `}
            >
              {options.map((option) => (
                <BigButton
                  key={option.value}
                  selected={characteristics[category as keyof typeof characteristics] === option.value}
                  onClick={() => onCharacteristicChange(category as 'atmosphere' | 'purpose' | 'size', option.value)}
                >
                  {option.label}
                </BigButton>
              ))}
            </div>
          </div>
        ))}
      </Col>
    </Col>
  );
};

export default RestaurantCharacteristicsStep;
