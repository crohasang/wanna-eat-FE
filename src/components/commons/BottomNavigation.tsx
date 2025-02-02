import { css } from '@emotion/react';
import { Col, Row } from './Flex';
import homeImg from '../../assets/home/navigationHome.svg';
import filledHomeImg from '../../assets/home/navigationHomeFilled.svg';
import eatImg from '../../assets/home/navigationEat.svg';
import filledEatImg from '../../assets/home/navigationEatFilled.svg';
import communityImg from '../../assets/home/navigationComunity.svg';
import filledCommunityImg from '../../assets/home/navigationComunityFilled.svg';
import mypageImg from '../../assets/home/navigationMypage.svg';
import filledMypageImg from '../../assets/home/navigationMypageFilled.svg';

interface BottomNavigationProps {
  active: 'home' | 'group' | 'community' | 'mypage';
}

const BottomNavigation = ({ active }: BottomNavigationProps) => {
  return (
    <Row
      justifyContent='space-between'
      alignItems='center'
      css={css`
        width: 100%;
        position: fixed;
        padding: 20px 0;
        font-size: 12px;
        font-weight: 700;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #dedede;
        background-color: white;
      `}
    >
      <Col alignItems='center'>
        <img src={active === 'home' ? homeImg : filledHomeImg} />
        <span
          css={css`
            color: ${active === 'home' ? 'black' : '#d7d7d7'};
          `}
        >
          홈
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'group' ? eatImg : filledEatImg} />
        <span
          css={css`
            color: ${active === 'group' ? 'black' : '#d7d7d7'};
          `}
        >
          먹팟
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'community' ? communityImg : filledCommunityImg} />
        <span
          css={css`
            color: ${active === 'community' ? 'black' : '#d7d7d7'};
          `}
        >
          커뮤니티
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'mypage' ? mypageImg : filledMypageImg} />
        <span
          css={css`
            color: ${active === 'mypage' ? 'black' : '#d7d7d7'};
          `}
        >
          마이페이지
        </span>
      </Col>
    </Row>
  );
};

export default BottomNavigation;
