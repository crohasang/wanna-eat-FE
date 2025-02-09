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
        <img src={active === 'home' ? filledHomeImg : homeImg} />
        <span
          css={css`
            color: ${active === 'home' ? '#f66' : '#d7d7d7'};
          `}
        >
          홈
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'group' ? filledEatImg : eatImg} />
        <span
          css={css`
            color: ${active === 'group' ? '#f66' : '#d7d7d7'};
          `}
        >
          먹팟
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'community' ? filledCommunityImg : communityImg} />
        <span
          css={css`
            color: ${active === 'community' ? '#f66' : '#d7d7d7'};
          `}
        >
          커뮤니티
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'mypage' ? filledMypageImg : mypageImg} />
        <span
          css={css`
            color: ${active === 'mypage' ? '#f66' : '#d7d7d7'};
          `}
        >
          마이페이지
        </span>
      </Col>
    </Row>
  );
};

export default BottomNavigation;
