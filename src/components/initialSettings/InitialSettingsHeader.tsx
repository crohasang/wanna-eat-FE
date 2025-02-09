/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Row } from "../commons/Flex"
import leftArrow from "../../assets/leftArrow.svg"

interface InitialSettingsHeaderProps {
    step: number;
    onBack?: () => void;
}

const InitialSettingsHeader = ({ step, onBack }: InitialSettingsHeaderProps) => {
  const progress = (step / 7) * 100;

  return (
    <Row
      css={css`
        display: inline-flex;
        padding: 20px 20.5px;
        align-items: center;
        gap: 38px;
        background: white;
      `}
    >
      <div css={css`
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
        {step >= 2 && (
          <img 
            src={leftArrow} 
            css={css`
              cursor: pointer;
              &:hover {
                opacity: 0.7;
              }
            `}
            onClick={onBack}
          />
        )}
      </div>
      <div css={css`
        position: relative;
        width: 242px;
        height: 10px;
        border-radius: 20px;
        background: #f4f4f4;
        overflow: hidden;
      `}>
        <div css={css`
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: ${progress}%;
          background: #F66;
          transition: width 0.3s ease-in-out;
          border-radius: 20px;
        `} />
      </div>
      <span css={css`
        color: var(--Gray, #E1E1E1);
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.07px;
      `}>
        Skip
      </span>
    </Row>
  )
}

export default InitialSettingsHeader