import leftArrowImg from '../../assets/leftArrow.svg';
import { css } from '@emotion/react';
import { Row } from './Flex';

const BackHeader = ({ title }: { title: string }) => {
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
