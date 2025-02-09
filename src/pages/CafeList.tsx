import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';
import { useState } from 'react';
import { css } from '@emotion/react';
import TagFilter from '../components/restaurantList/TagFilter';
import SearchBar from '../components/common/SearchBar';
import HomeCard from '../components/home/HomeCard';
import MakeMuckpotButton from '../components/restaurantList/MakeMuckpotButton';

const TAGS = ['가까운', '프렌차이즈', '개인', '커피챗하기 좋은', '테이블이 네모'];

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

const CafeList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [homeCards, setHomeCards] = useState(HomeCardList);

  const toggleHomeCardFavorite = (index: number) => {
    setHomeCards((prev) =>
      prev.map((homeCard, i) =>
        i === index ? { ...homeCard, isFavorite: !homeCard.isFavorite } : homeCard
      )
    );
  };
  return (
    <>
      <Col>
        <BackHeader title={'카페'}></BackHeader>
        <div
          css={css`
            margin-top: 12px;
            width: 90%;
            margin-left: 5%;
          `}
        ></div>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <h3
          css={css`
            margin-left: 1em;
          `}
        >
          상황별로 골라보기
        </h3>
        <TagFilter tags={TAGS} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <MakeMuckpotButton />
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
    </>
  );
};

export default CafeList;
