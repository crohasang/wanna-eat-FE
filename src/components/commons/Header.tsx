import { css } from '@emotion/react';
import { Row } from './Flex';

interface HeaderProps {
  text: string;
  hasRightButton?: boolean;
  rightButtons?: string[];
}
const Header = (props: HeaderProps) => {
  const { text, hasRightButton = false, rightButtons = [] } = props;
  return (
    <Row
      justifyContent='space-between'
      alignItems='center'
      css={css`
        width: 100%;
        position: fixed;
        padding: 10px 20px;
        font-weight: 700;
        font-size: 24px;
        background-color: white;
      `}
    >
      <div>{text}</div>
      {hasRightButton && (
        <div>
          {rightButtons.map((button, index) => (
            <button key={index}>
              <img src={button} />
            </button>
          ))}
        </div>
      )}
    </Row>
  );
};

export default Header;
