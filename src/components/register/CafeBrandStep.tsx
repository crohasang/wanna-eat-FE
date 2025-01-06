/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import SearchInput from '../common/SearchInput';

interface CafeBrandStepProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const CafeBrandStep = ({ searchQuery, onSearchChange }: CafeBrandStepProps) => {
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
        {'선호하는 카페 브랜드를\n선택해주세요.'}
      </p>

      <SearchInput
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="카페 브랜드를 검색해주세요"
      />
    </Col>
  );
};

export default CafeBrandStep;
