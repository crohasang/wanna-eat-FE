import { css } from '@emotion/react';
import { Row } from './Flex';

interface HeaderProps {
  text?: string;
  hasLeftImg?: boolean;
  leftImg?: string;
  hasRightButton?: boolean;
  rightButtons?: string[];
}
const Header = (props: HeaderProps) => {
  const { text, hasRightButton = false, rightButtons = [], hasLeftImg = false, leftImg } = props;
  return (
    <Row
      justifyContent='space-between'
      alignItems='center'
      css={css`
        position: fixed;
        padding: 10px 20px;
        font-weight: 700;
        font-size: 24px;
        background-color: white;
        box-sizing: border-box;
      `}
    >
      {hasLeftImg && <img src={leftImg}></img>}
      <div>{text}</div>
      {hasRightButton && (
        <div>
          {rightButtons.map((button, index) => (
            <button
              css={css`
                background-color: #fff;
                padding: 0;
              `}
              key={index}
            >
              <img
                css={css`
                  width: 6vw;
                  margin-left: 3vw;
                `}
                src={button}
              />
            </button>
          ))}
        </div>
      )}
    </Row>
  );
};

export default Header;
