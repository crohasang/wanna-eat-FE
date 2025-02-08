import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';
import { useState } from 'react';
import { css } from '@emotion/react';
import TagFilter from '../components/restaurantList/TagFilter';
import SearchBar from '../components/common/SearchBar';

const TAGS = ['가까운', '회식에 딱', '시끌벅적한', '분위기 있는'];

const RestaurantList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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
      </Col>
    </>
  );
};

export default RestaurantList;
