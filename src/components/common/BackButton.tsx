/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

interface BackButtonProps {
  to?: string;
  onClick?: () => void;
  className?: string;
}

const buttonStyle = css`
  display: flex;
  align-items: center;
  padding: 8px;
  color: #333;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
  
  &:hover {
    opacity: 0.8;
  }
`;

const BackButton = ({ to, onClick, className }: BackButtonProps) => {
  if (to) {
    return (
      <Link to={to} css={buttonStyle} className={className}>
        <IoChevronBack />
      </Link>
    );
  }

  return (
    <button onClick={onClick} css={buttonStyle} className={className}>
      <IoChevronBack />
    </button>
  );
};

export default BackButton;
