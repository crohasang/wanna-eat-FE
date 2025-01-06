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
        padding: 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        
        &:hover {
          background-color: #45a049;
        }
        
        &:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
