import leftArrowImg from '../../assets/leftArrow.svg';
import { css } from '@emotion/react';
import { Row } from './Flex';
import { useNavigate } from 'react-router-dom';

const BackHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <Row
      css={css`
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
      `}
    >
      <img
        src={leftArrowImg}
        css={css`
          position: absolute;
          left: 20px;
        `}
        onClick={() => navigate(-1)}
      />
      <p
        css={css`
          font-size: 20px;
          font-weight: 500;
          margin: 0;
        `}
      >
        {title}
      </p>
    </Row>
  );
};

export default BackHeader;
