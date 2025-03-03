/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EmptyArrow from '../../assets/common/emptyArrow.svg';
import FilledArrow from '../../assets/common/filledArrow.svg';

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  width?: number;
  height?: number;
}

const CheckBox = ({ checked, onChange, width = 20, height = 20 }: CheckBoxProps) => {
  return (
    <div
      css={css`
        cursor: pointer;
        width: ${width}px;
        height: ${height}px;
      `}
      onClick={onChange}
    >
      <img 
        src={checked ? FilledArrow : EmptyArrow} 
        alt="check" 
        css={css`
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  );
};

export default CheckBox;
