import { css } from '@emotion/react';
import BottomNavigation from '../components/commons/BottomNavigation';
import { Col } from '../components/commons/Flex';
import Header from '../components/commons/Header';
import ContentBox from '../components/MyPage/ContentBox';

const data = [
  {
    title: '나의 커뮤니티',
    items: [
      { text: '내가 작성한 글', subText: '1', type: 'link' },
      { text: '내가 작성한 댓글', subText: '12', type: 'link' },
      { text: '내가 저장한 식당/카페', subText: '10', type: 'link' },
    ],
  },
  {
    title: '설정 관리',
    items: [
      { text: '서비스 알림 허용', type: 'toggle' },
      { text: '서비스 가이드 보기', type: 'link' },
      { text: '1 : 1 문의', type: 'link' },
      { text: '서비스 정보 ', subText: '(현재 ver 1.0)', type: 'link' },
      { text: '개인정보 처리 방침', type: 'link' },
      { text: '서비스 이용 약관', type: 'link' },
      { text: '로그아웃', type: 'link' },
    ],
  },
];

const MyPage = () => {
  return (
    <>
      <Header text='마이페이지' />
      <Col
        css={css`
          margin: 8vh 20px 20px 20px;
          font-size: 22px;
          font-weight: 700;
          height: '80%';
        `}
      >
        <div>이름님</div>
        <div>오늘도 맜있는 하루 보내셨나요?</div>
        <button
          css={css`
            background-color: white;
            padding: 0;
            display: flex;
            font-size: 14px;
            color: #b7b7b7;
          `}
        >
          프로필 편집하기
        </button>
      </Col>
      {data.map((section, index) => (
        <ContentBox key={index} title={section.title} items={section.items} />
      ))}
      <div
        css={css`
          margin-top: 12vh;
        `}
      >
        .
      </div>
      <BottomNavigation active='mypage' />
    </>
  );
};

export default MyPage;
