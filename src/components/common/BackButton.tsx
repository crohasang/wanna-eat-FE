/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

interface BackButtonProps {
  to: string;
  className?: string;
}

const buttonStyle = css`
  display: flex;
  align-items: center;
  padding: 8px;
  color: #333;
  text-decoration: none;
  font-size: 24px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const BackButton = ({ to, className }: BackButtonProps) => {
  return (
    <Link to={to} css={buttonStyle} className={className}>
      <IoChevronBack />
    </Link>
  );
};

export default BackButton;
