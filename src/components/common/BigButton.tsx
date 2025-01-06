/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface BigButtonProps {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const BigButton = ({ selected = false, onClick, children }: BigButtonProps) => {
  return (
    <button
      onClick={onClick}
      css={css`
        display: flex;
        width: 157px;
        height: 118px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 16px;
        border: 1px solid ${selected ? '#4CAF50' : '#DEDEDE'};
        background: ${selected ? '#F0F9F1' : '#F5F6F8'};
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 18px;
        font-weight: 500;
        color: ${selected ? '#4CAF50' : '#333'};
        outline: none;

        &:hover {
          background: ${selected ? '#F0F9F1' : '#ECEDEF'};
          border-color: ${selected ? '#4CAF50' : '#CECECE'};
        }

        &:focus {
          outline: none;
        }
      `}
    >
      {children}
    </button>
  );
};

export default BigButton;
