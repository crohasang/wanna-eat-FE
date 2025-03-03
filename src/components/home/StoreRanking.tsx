import { css } from '@emotion/react';
import { Col, Row } from '../common/Flex';
import starFilledImg from '../../assets/home/starFilled.svg';
import starOutlinedImg from '../../assets/home/starOutlined.svg';

interface StoreRankingProps {
  ranking: number;
  name: string;
  category: string;
  openInfo: string;
  isFavorite?: boolean;
  onToggleFavorite: () => void;
}

const StoreRanking = ({
  ranking,
  name,
  category,
  isFavorite,
  openInfo,
  onToggleFavorite,
}: StoreRankingProps) => {
  return (
    <Row
      css={css`
        justify-content: space-between;
        margin: 2vh 2vw;
      `}
    >
      <div
        css={css`
          color: #ff6666;
          font-weight: 600;
          margin-right: 6vw;
        `}
      >
        {ranking}
      </div>
      <Col>
        <span
          css={css`
            font-weight: 600;
          `}
        >
          {name}
        </span>
        <span
          css={css`
            font-size: 13px;
          `}
        >
          {category}
        </span>
        <span
          css={css`
            font-size: 14px;
          `}
        >
          {openInfo}
        </span>
      </Col>
      <button
        onClick={onToggleFavorite}
        css={css`
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        `}
      >
        <img src={isFavorite ? starFilledImg : starOutlinedImg} alt='favorite-icon' css={css``} />
      </button>
    </Row>
  );
};

export default StoreRanking;
