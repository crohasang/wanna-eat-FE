import { css } from '@emotion/react';
import { Col, Row } from '../commons/Flex';
import toggleImg from '../../assets/toggle.svg';

interface ContentBoxProps {
  title: string;
  items: Array<{
    text: string;
    subText?: string;
    type?: 'toggle' | 'link';
  }>;
}
const ContentBox = (props: ContentBoxProps) => {
  const { title, items } = props;
  return (
    <Col
      justifyContent='center'
      css={css`
        border: 1px solid #fff;
        padding: 23px 26px;
        border-radius: 16px;
        display: flex;
        gap: 12px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
        margin: 7vw;
      `}
    >
      <span
        css={css`
          font-size: 18px;
          font-weight: 700;
        `}
      >
        {title}
      </span>
      {items.map((item, index) => (
        <Row
          key={index}
          justifyContent='space-between'
          alignItems='center'
          css={css`
            font-size: 16px;
            font-weight: 500;
            color: #333;
            padding-bottom: 6px;
            border-bottom: ${index !== items.length - 1 ? '1px solid #eee' : 'none'};
          `}
        >
          <span>
            <span>{item.text}</span>
            {item.subText && (
              <span
                css={css`
                  font-size: 14px;
                  font-weight: 500;
                  color: #565656;
                  margin-left: 2vw;
                `}
              >
                {item.subText}
              </span>
            )}
          </span>
          {item.type == 'link' ? (
            <span
              css={css`
                color: #b7b7b7;
              `}
            >
              &gt;
            </span>
          ) : (
            <img src={toggleImg}></img>
          )}
        </Row>
      ))}
    </Col>
  );
};

export default ContentBox;
