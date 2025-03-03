import { Row } from '../common/Flex';
import restaurantImg from '../../assets/home/restaurant.svg';
import { css } from '@emotion/react';
import rightArrowImg from '../../assets/rightArrow.svg';

interface VisitedRestaurantProps {
  name: string;
  category: string;
}

const VisitedRestaurant = ({ name, category }: VisitedRestaurantProps) => {
  return (
    <Row
      css={css`
        justify-content: space-between;
        padding: 1em;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);
        border-radius: 16px;
        width: 90%;
        margin: 1em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8em;
        `}
      >
        <img src={restaurantImg} alt='restaurantImg' />
        <span>{name}</span>
        <span
          css={css`
            color: #878787;
            font-size: 13px;
          `}
        >
          {category}
        </span>
      </div>
      <img src={rightArrowImg} alt='rightArrowImg' />
    </Row>
  );
};

export default VisitedRestaurant;
