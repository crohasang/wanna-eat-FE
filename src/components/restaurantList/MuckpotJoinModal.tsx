import { css } from '@emotion/react';
import { Col, Row } from '../commons/Flex';
import TagList from '../home/TagList';
import RestaurantImg from '../../assets/home/restaurant.svg';

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

const subTextStyle = css`
  font-size: 13px;
  color: #878787;
  margin-right: 18px;
  align-self: center;
  white-space: nowrap;
`;

const MuckpotJoinModal = ({ isOpen, onClose, muckpotData }: MuckpotJoinModalProps) => {
  if (!isOpen || !muckpotData) return null;
  const { title, date, time, members, restaurant, tags, category, address, message } = muckpotData;

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
          `}
        >
          현재 다음과 같은 먹팟이 존재해요. <br />
          해당 먹팟에 참여하시겠어요?
        </h3>

        <Col
          css={css`
            background: #fff;
            border-radius: 20px;
            padding: 16px 16px 0 16px;
            text-align: left;
            border: 1px solid #ddd;
            margin-bottom: 16px;
          `}
        >
          <div
            css={css`
              border-bottom: solid 1px #e1e1e1;
              padding-bottom: 12px;
            `}
          >
            <span
              css={css`
                font-weight: 600;
                color: #3d3d3d;
              `}
            >
              {title}
            </span>
            <br />
            <span
              css={css`
                font-size: 14px;
                font-weight: 400;
                color: #878787;
              `}
            >
              {date} {time}
            </span>
          </div>
          <Row>
            <p css={subTextStyle}>구성원</p>
            <p
              css={css`
                font-size: 14px;
                font-weight: 600;
                color: #878787;
              `}
            >
              {members.join(' ')}
            </p>
          </Row>
          <Row>
            <p
              css={css`
                font-size: 13px;
                color: #878787;
                margin-right: 18px;
                align-self: center;
                white-space: nowrap;
                align-self: flex-start;
                margin-top: 0;
              `}
            >
              장소
            </p>
            <Col
              css={css`
                margin-left: 8px;
                gap: 6px;
              `}
            >
              <Row
                css={css`
                  gap: 6px;
                  font-weight: 600;
                  color: #3d3d3d;
                `}
              >
                <img
                  src={RestaurantImg}
                  alt='restaurantImg'
                  css={css`
                    width: 20px;
                    height: 20px;
                  `}
                />
                {restaurant} <br />
              </Row>
              <TagList tags={tags} />

              <span
                css={css`
                  font-size: 14px;
                  font-weight: 400;
                  color: #3d3d3d;
                `}
              >
                {category}
              </span>

              <span
                css={css`
                  font-size: 13px;
                  font-weight: 400;
                  color: #878787;
                `}
              >
                {address}
              </span>
            </Col>
          </Row>
          <Row>
            <p css={subTextStyle}>메세지</p>
            <p
              css={css`
                font-size: 16px;
                font-weight: 400;
                font-family: 'BM kkubulim';
              `}
            >
              {message}
            </p>
          </Row>
        </Col>

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
