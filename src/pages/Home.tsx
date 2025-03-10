import { css } from '@emotion/react';
import { Col, Row } from '../components/common/Flex';
import Header from '../components/common/Header';
import topPhrase from '../assets/home/topPhrase.svg';
import searchImg from '../assets/home/search.svg';
import alarmImg from '../assets/home/alarm.svg';
import { useState } from 'react';
import restaurantImg from '../assets/home/restaurant.svg';
import cafeImg from '../assets/home/cafe.svg';
import Restaurant from '../components/home/Restaurant';
import Cafe from '../components/home/Cafe';
import BottomNavigation from '../components/common/BottomNavigation';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('restaurant');
  return (
    <>
      <Header
        hasLeftImg={true}
        leftImg={topPhrase}
        hasRightButton={true}
        rightButtons={[searchImg, alarmImg]}
      />
      <Col>
        <Row
          css={css`
            margin: 12vh 0 0 0;
            padding: 0;
            justify-content: space-between;
          `}
        >
          <button
            onClick={() => setSelectedTab('restaurant')}
            css={css`
              font-size: 18px;
              color: ${selectedTab === 'restaurant' ? '#ff6666' : '#e1e1e1'};
              border-bottom: 2px solid ${selectedTab === 'restaurant' ? '#ff6666' : '#e1e1e1'};
              background: none;
              cursor: pointer;
              font-family: 'BMkkubulimTTF-Regular';
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.2em;
              gap: 1em;
              border-radius: 0;
              width: 50%;
              :focus {
                outline: none;
              }
            `}
          >
            <img src={restaurantImg} alt='restaurantImg' />
            식당
          </button>
          <button
            onClick={() => setSelectedTab('cafe')}
            css={css`
              font-size: 18px;
              color: ${selectedTab === 'cafe' ? '#ff6666' : '#e1e1e1'};
              border-bottom: 2px solid ${selectedTab === 'cafe' ? '#ff6666' : '#e1e1e1'};
              background: none;
              cursor: pointer;
              font-family: 'BMkkubulimTTF-Regular';
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0;
              width: 50%;
              gap: 1em;
              padding: 0.2em;
              :focus {
                outline: none;
              }
            `}
          >
            <img src={cafeImg} alt='cafeImg' />
            카페
          </button>
        </Row>
        <div
          css={css`
            background-color: #fafafa;
            height: 1vh;
          `}
        />
        <div
          css={css`
            margin-bottom: 12vh;
          `}
        >
          {selectedTab === 'restaurant' ? <Restaurant /> : <Cafe />}
        </div>
      </Col>
      <BottomNavigation active='home' />
    </>
  );
};

export default Home;
