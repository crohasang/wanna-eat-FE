/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  children: React.ReactNode;
}

const Button = ({ width = '100%', children, ...props }: ButtonProps) => {
  return (
    <button
      css={css`
        width: ${width};
        display: flex;
        padding: 20px 169px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid #F66;
        background: #F66;
        white-space: nowrap;
      `}
      {...props}
    >
      <div css={css`
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: inline-block; 
      `}
      >
      {children}
      </div>
    </button>
  );
};

export default Button;
