/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <Col css={css``}>
      <h3
        css={css`
          margin: 0;
        `}
      >
        {title}
      </h3>

      <span
        css={css`
          font-size: 12px;
          color: #878787;
        `}
      >
        {subtitle}
      </span>
    </Col>
  );
};

export default TitleSection;
