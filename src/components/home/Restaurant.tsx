import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';
import VisitedRestaurant from './VisitedRestaurant';

const groupRestaurantData = [
  {
    ranking: 1,
    name: '성수노루',
    category: '곱창, 막창, 양',
    openInfo: '영업 중 | 17:00에 브레이크타임',
    isFavorite: true,
  },
  {
    ranking: 2,
    name: '건대치킨',
    category: '치킨',
    openInfo: '오늘 휴무',
    isFavorite: false,
  },
  {
    ranking: 3,
    name: '양꼬치미쳤다',
    category: '양꼬치, 라면',
    openInfo: '영업 종료 ',
    isFavorite: false,
  },
];
const visitedRestaurantData = {
  name: '성수노루',
  category: '곱창, 막창, 양',
};

const Restaurant = () => {
  const [groupRestaurants, setGroupRestaurants] = useState(groupRestaurantData);

  const toggleFavorite = (index: number) => {
    setGroupRestaurants((prev) =>
      prev.map((restaurant, i) =>
        i === index ? { ...restaurant, isFavorite: !restaurant.isFavorite } : restaurant
      )
    );
  };

  return (
    <Col>
      <TitleSection title='이 달의 단체 식당 랭킹' subtitle='단체 예약이 가능한 식당이에요.' />
      <Col
        css={css`
          padding: 0 1em 1em 1em;
        `}
      >
        {groupRestaurants.map((restaurant, index) => (
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
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection title='한 번 더 먹으러 갈까요?' subtitle='먹팟과 함께 방문했던 식당이에요.' />
      <VisitedRestaurant
        name={visitedRestaurantData.name}
        category={visitedRestaurantData.category}
      />
    </Col>
  );
};

export default Restaurant;
