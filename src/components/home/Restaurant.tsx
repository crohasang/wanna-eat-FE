import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';

const dummyData = [
  {
    ranking: 1,
    name: '성수노루',
    category: '곱창, 막창, 양',
    openInfo: '영업 중 | 17:00에 브레이크타임',
    isFavorite: true,
  },
  {
    ranking: 2,
    name: '성수노루',
    category: '곱창, 막창, 양',
    openInfo: '영업 중 | 17:00에 브레이크타임',
    isFavorite: false,
  },
  {
    ranking: 3,
    name: '성수노루',
    category: '곱창, 막창, 양',
    openInfo: '영업 중 | 17:00에 브레이크타임',
    isFavorite: false,
  },
];

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState(dummyData);

  const toggleFavorite = (index: number) => {
    setRestaurants((prev) =>
      prev.map((restaurant, i) =>
        i === index ? { ...restaurant, isFavorite: !restaurant.isFavorite } : restaurant
      )
    );
  };

  return (
    <Col>
      <Col
        css={css`
          padding: 1em;
        `}
      >
        <TitleSection title='이 달의 단체 식당 랭킹' subtitle='단체 예약이 가능한 식당이에요.' />

        {restaurants.map((restaurant, index) => (
          <StoreRanking
            key={restaurant.ranking}
            ranking={restaurant.ranking}
            name={restaurant.name}
            category={restaurant.category}
            openInfo={restaurant.openInfo}
            isFavorite={restaurant.isFavorite}
            onToggleFavorite={() => toggleFavorite(index)}
          />
        ))}
      </Col>
    </Col>
  );
};

export default Restaurant;
