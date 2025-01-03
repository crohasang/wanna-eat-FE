import { css } from '@emotion/react';
import { Col, Row } from './Flex';
import testImg from '../../assets/test.svg';
import filledTestImg from '../../assets/test2.svg';

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
        <img src={active === 'home' ? filledTestImg : testImg} />
        <span
          css={css`
            color: ${active === 'home' ? 'black' : '#d7d7d7'};
          `}
        >
          홈
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'group' ? filledTestImg : testImg} />
        <span
          css={css`
            color: ${active === 'group' ? 'black' : '#d7d7d7'};
          `}
        >
          그룹
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'community' ? filledTestImg : testImg} />
        <span
          css={css`
            color: ${active === 'community' ? 'black' : '#d7d7d7'};
          `}
        >
          커뮤니티
        </span>
      </Col>
      <Col alignItems='center'>
        <img src={active === 'mypage' ? filledTestImg : testImg} />
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
