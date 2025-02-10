import leftArrowImg from '../../assets/leftArrow.svg';
import { css } from '@emotion/react';
import { Row, Col } from './Flex';
import { useNavigate } from 'react-router-dom';

interface BackHeaderProps {
  title: string;
  alignLeft?: boolean;
}

const BackHeader = ({ title, alignLeft = false }: BackHeaderProps) => {
  const navigate = useNavigate();

  return alignLeft ? (
    <Col
      css={css`
        position: relative;
        align-items: flex-start;
        padding: 12px 20px;
        gap: 8px;
      `}
    >
      <img
        src={leftArrowImg}
        css={css`
          cursor: pointer;
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
    </Col>
  ) : (
    <Row
      css={css`
        position: relative;
        align-items: center;
        padding: 12px 0;
        justify-content: center;
      `}
    >
      <img
        src={leftArrowImg}
        css={css`
          position: absolute;
          left: 20px;
          cursor: pointer;
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
