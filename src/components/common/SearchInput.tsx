/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({ value, onChange, placeholder = '검색어를 입력해주세요' }: SearchInputProps) => {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        css={css`
          width: 100%;
          height: 48px;
          padding: 0 48px 0 20px;
          border-radius: 24px;
          border: none;
          background: #F5F6F8;
          color: #333;
          font-size: 16px;
          outline: none;
          transition: background 0.2s ease;

          &::placeholder {
            color: #999;
          }

          &:hover {
            background: #ECEDEF;
          }

          &:focus {
            background: #ECEDEF;
          }
        `}
      />
      <IoSearch
        css={css`
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24px;
          color: #666;
          pointer-events: none;
        `}
      />
    </div>
  );
};

export default SearchInput;
