import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';
import { useState } from 'react';
import { css } from '@emotion/react';
import TagFilter from '../components/restaurantList/TagFilter';
import SearchBar from '../components/common/SearchBar';
import HomeCard from '../components/home/HomeCard';
import MakeMuckpotButton from '../components/restaurantList/MakeMuckpotButton';
import MuckpotJoinModal from '../components/restaurantList/JoinMuckpotModal';

const TAGS = ['가까운', '회식에 딱', '시끌벅적한', '분위기 있는'];

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

const muckpotData = {
  id: 1,
  title: '그로스 팀 번개 회식',
  date: '2025.01.01',
  time: '오후 06:00',
  members: ['먹을래', '먹을래', '먹을래', '먹을래', '먹을래'],
  restaurant: '성수노루',
  tags: ['시끌벅적한', '대규모', '회식에 딱'],
  category: '곱창, 막창, 양',
  address: '서울 성동구 아차산로 110 1층',
  message: '회식 가자! 제가 쏩니다',
};

const RestaurantList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [homeCards, setHomeCards] = useState(HomeCardList);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <BackHeader title={'식당'}></BackHeader>
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
              onClick={() => setIsModalOpen(true)}
            />
          ))}
        </Col>
        <MuckpotJoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          muckpotData={muckpotData}
        />
      </Col>
    </>
  );
};

export default RestaurantList;
