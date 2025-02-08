import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';
import VisitedRestaurant from './VisitedRestaurant';
import HomeCard from './HomeCard';

const groupCafeData = [
  {
    ranking: 1,
    name: '카페데이지크',
    category: '빵, 케이크',
    openInfo: '영업 중 | 22:00에 라스트오더',
    isFavorite: true,
  },
  {
    ranking: 2,
    name: '카페 롱',
    category: '스콘, 크로플',
    openInfo: '오늘 휴무',
    isFavorite: false,
  },
  {
    ranking: 3,
    name: '카페인 중독',
    category: '와플',
    openInfo: '영업 종료 ',
    isFavorite: false,
  },
];

const visitedCafeData = {
  name: '카페데이지크',
  category: '빵, 케이크',
};

const HomeCardList = [
  {
    name: '카페데이지크',
    category: '빵, 케이크',
    address: '서울 성동구 아차산로 110 1층',
    imageUrls: [
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
    ],
    tag: ['개인', '커피챗하기 좋은', '테이크아웃'],
    isFavorite: true,
  },
  {
    name: '카페데이지크',
    category: '빵, 케이크',
    address: '서울 성동구 아차산로 110 1층',
    imageUrls: [
      'https://www.theborn.co.kr/wp-content/uploads/2017/06/%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9_img00.jpg',
    ],
    tag: ['개인', '커피챗하기 좋은', '테이크아웃'],
    isFavorite: false,
  },
];

const Cafe = () => {
  const [groupCafes, setGroupCafes] = useState(groupCafeData);
  const [homeCards, setHomeCards] = useState(HomeCardList);

  const toggleGroupFavorite = (index: number) => {
    setGroupCafes((prev) =>
      prev.map((cafe, i) => (i === index ? { ...cafe, isFavorite: !cafe.isFavorite } : cafe))
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
      <TitleSection title='이 달의 단체 카페 랭킹' subtitle='점심 시간에 간단한 커피챗은 여기서!' />
      <Col
        css={css`
          padding: 0 1em 1em 1em;
        `}
      >
        {groupCafes.map((cafe, index) => (
          <StoreRanking
            key={cafe.ranking}
            ranking={cafe.ranking}
            name={cafe.name}
            category={cafe.category}
            openInfo={cafe.openInfo}
            isFavorite={cafe.isFavorite}
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
      <TitleSection title='한 번 더 먹으러 갈까요?' subtitle='먹팟과 함께 방문했던 카페에요.' />
      <VisitedRestaurant name={visitedCafeData.name} category={visitedCafeData.category} />
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection
        title='나의 회사 근처 카페'
        subtitle='먹을래님의 회사에서 가까운 카페에요.'
        isRightButton={true}
        navigateTo='cafe'
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

export default Cafe;
