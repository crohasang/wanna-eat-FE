import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';
import VisitedRestaurant from './VisitedRestaurant';
import HomeCard from './HomeCard';

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

const HomeCardList = [
  {
    name: '성수노루',
    category: '곱창, 막창, 양',
    address: '서울 성동구 아차산로 110 1층',
    imageUrls: [
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
    ],
    tag: ['시끌벅적한', '대규모', '회식에 딱'],
    isFavorite: true,
  },
  {
    name: '건대치킨',
    category: '치킨',
    address: '서울 광진구 능동로 100',
    imageUrls: [
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
    ],
    isFavorite: false,
  },
];

const Restaurant = () => {
  const [groupRestaurants, setGroupRestaurants] = useState(groupRestaurantData);
  const [homeCards, setHomeCards] = useState(HomeCardList);

  const toggleGroupFavorite = (index: number) => {
    setGroupRestaurants((prev) =>
      prev.map((restaurant, i) =>
        i === index ? { ...restaurant, isFavorite: !restaurant.isFavorite } : restaurant
      )
    );
  };

  const toggleHomeCardFavorite = (index: number) => {
    setHomeCards((prev) =>
      prev.map((homeCard, i) =>
        i === index ? { ...homeCard, isFavorite: !homeCard.isFavorite } : homeCard
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
            onToggleFavorite={() => toggleGroupFavorite(index)}
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
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection
        title='나의 회사 근처 식당'
        subtitle='먹을래님의 회사에서 가까운 식당이에요.'
        isRightButton={true}
      />
      <Col>
        {homeCards.map((homeCard, index) => (
          <HomeCard
            key={index}
            name={homeCard.name}
            category={homeCard.category}
            address={homeCard.address}
            tag={homeCard.tag || []}
            imageUrl={homeCard.imageUrls || []}
            isFavorite={homeCard.isFavorite}
            onToggleFavorite={() => toggleHomeCardFavorite(index)}
          />
        ))}
      </Col>
    </Col>
  );
};

export default Restaurant;
