import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';
import Header from '../components/commons/Header';
import topPhrase from '../assets/home/topPhrase.svg';
import searchImg from '../assets/home/search.svg';
import alarmImg from '../assets/home/alarm.svg';

const Home = () => {
  return (
    <Col
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      d
      <Header
        hasLeftImg={true}
        leftImg={topPhrase}
        hasRightButton={true}
        rightButtons={[searchImg, alarmImg]}
      />
    </Col>
  );
};

export default Home;
