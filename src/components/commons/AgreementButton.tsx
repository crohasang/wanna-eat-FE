/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightArrow from '../../assets/rightArrow.svg';

interface AgreementButtonProps {
  text: string;
  onClick?: () => void;
}

const AgreementButton = ({ text, onClick }: AgreementButtonProps) => {
  return (
    <div
      css={css`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        width: 320px;
        height: 60px;
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        box-sizing: border-box;
      `}
      onClick={onClick}
    >
      <span
        css={css`
          color: var(--Text, #3D3D3D);
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.08px;
        `}
      >
        {text}
      </span>
      <img src={RightArrow} alt="right arrow" />
    </div>
  );
};

export default AgreementButton;
