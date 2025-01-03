/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import Dropdown from '../common/Dropdown';

interface DepartmentStepProps {
  department: string;
  onDepartmentChange: (value: string) => void;
}

const departments = [
  '부서 선택',
  'Tech 팀',
  '물류 팀',
  '경영지원 팀',
  'CX 팀',
  '그로스 팀',
  '사업기획 팀'
];

const DepartmentStep = ({ department, onDepartmentChange }: DepartmentStepProps) => {
  return (
    <Col gap="12px" alignItems="start" css={css`width: 100%;`}>
      <p
        css={css`
          color: var(--black-accents-5, #111);
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          white-space: pre-line;
          text-align: start;
          margin-bottom: 12px;
        `}
      >
        {'회사 내에서 속한 부서를\n선택해주세요.'}
      </p>

      <Dropdown
        options={departments.slice(1)}
        value={department}
        onChange={onDepartmentChange}
        placeholder="부서 선택"
      />
    </Col>
  );
};

export default DepartmentStep;
