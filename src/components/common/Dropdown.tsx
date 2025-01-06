/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown = ({ options, value, onChange, placeholder = '선택해주세요' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        css={css`
          width: 100%;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 10px;
          border: 1px solid #DEDEDE;
          background: #F5F6F8;
          color: ${value ? '#333' : '#999'};
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            background: #ECEDEF;
          }
        `}
      >
        <span>{value || placeholder}</span>
        <IoChevronDown
          css={css`
            transform: rotate(${isOpen ? '180deg' : '0deg'});
            transition: transform 0.2s ease;
          `}
        />
      </button>

      {isOpen && (
        <ul
          css={css`
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            background: white;
            border-radius: 10px;
            border: 1px solid #DEDEDE;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            padding: 8px 0;
          `}
        >
          {options.map((option) => (
            <li
              key={option}
              css={css`
                padding: 12px 16px;
                cursor: pointer;
                color: #333;
                transition: background 0.2s ease;

                &:hover {
                  background: #F5F6F8;
                }
              `}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
