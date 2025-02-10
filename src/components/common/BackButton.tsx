/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import backChevron from '../../assets/common/backChevron.svg';

interface BackButtonProps {
  to?: string;
  onClick?: () => void;
  className?: string;
}



const BackButton = ({ to, onClick, className }: BackButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        <img src={backChevron} alt="backChevron" css={css`
          width: 7px;
          height: 12px;
        `} />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      <img src={backChevron} alt="backChevron" css={css`
          width: 7px;
          height: 12px;
        `} />
    </button>
  );
};

export default BackButton;
