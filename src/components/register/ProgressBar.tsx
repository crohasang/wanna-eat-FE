/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const containerStyle = css`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 20px 0;
`;

const progressStyle = (progress: number) => css`
  height: 100%;
  width: ${progress}%;
  background-color: #4CAF50;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div css={containerStyle}>
      <div css={progressStyle(progress)} />
    </div>
  );
};

export default ProgressBar;