import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import MuckpotInfoBox from './MuckpotInfoBox';

interface Muckpot {
  id: number;
  title: string;
  date: string;
  time: string;
  members: string[];
  restaurant: string;
  tags: string[];
  category: string;
  address: string;
  message: string;
}

interface MuckpotJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  muckpotData?: Muckpot;
}

const MuckpotJoinModal = ({ isOpen, onClose, muckpotData }: MuckpotJoinModalProps) => {
  if (!isOpen || !muckpotData) return null;

  return (
    <Col
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
        z-index: 1000;
      `}
    >
      <div
        css={css`
          background: white;
          padding: 20px;
          border-radius: 20px;
          width: 90%;
          max-width: 400px;
          text-align: center;
        `}
      >
        <h3
          css={css`
            margin-top: 0;
            text-align: left;
          `}
        >
          현재 다음과 같은 먹팟이 존재해요. <br />
          해당 먹팟에 참여하시겠어요?
        </h3>

        <MuckpotInfoBox muckpotData={muckpotData} />

        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 12px;
          `}
        >
          <button
            css={css`
              background: #ff6666;
              color: white;
              padding: 12px;
              border-radius: 20px;
            `}
            onClick={onClose}
          >
            예
          </button>
          <button
            css={css`
              background: white;
              color: #ff6666;
              padding: 12px;
              border-radius: 20px;
              border: 1px solid #ff6666;
            `}
            onClick={onClose}
          >
            아니요
          </button>
        </div>
      </div>
    </Col>
  );
};

export default MuckpotJoinModal;
